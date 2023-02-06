import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EnvironmentVariables } from "src/interfaces";
import { PrismaService } from "src/modules/Storage/services/prisma.service";
import { updatePricedDatesParams, updatePricedDatesHeaders } from "../constants";
import { buildListPricedDatesRequestData } from "../utils/buildListPricedDatesRequestData";
import { BestDeal, PricedDate } from "@prisma/client";
import * as moment from 'moment';

interface UpdatePricedDatesArgs {
  startDate: string;
  endDate: string;
}

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly httpService: HttpService,
    private readonly prismaService: PrismaService,
  ) { }

  async updateBestDeals(pricedDates: PricedDate[]): Promise<BestDeal[]> {
    const dealEdge = Number(this.configService.get<number>('TICKET_DEAL_EDGE'));

    if (!dealEdge) {
      throw new InternalServerErrorException('Deal edge parameter is undefined');
    }

    if (Number.isNaN(dealEdge)) {
      throw new InternalServerErrorException('Deal edge parameter is not a valid number');
    }

    const newDeals = await Promise.all(pricedDates.map(async ({ id, date, price }) => {
      const oldDeal = await this.prismaService.bestDeal.findFirst({
        where: {
          pricedDate: {
            date,
          }
        },
        include: { pricedDate: true }
      })

      const isDeal = price <= dealEdge;

      if (isDeal && (!oldDeal || (!!oldDeal && price < oldDeal.pricedDate.price))) {
        return await this.prismaService.bestDeal.create({
          data: {
            pricedDateId: id,
          }
        });
      };

      return null;
    }));

    return newDeals.filter((deal) => !!deal);
  }

  async updatePricedDates({ startDate, endDate }: UpdatePricedDatesArgs): Promise<PricedDate[]> {
    let response;
    try {
      response = await this.httpService.axiosRef.post(
        this.configService.get('TICKET_URL'),
        buildListPricedDatesRequestData(startDate, endDate),
        {
          params: updatePricedDatesParams,
          headers: updatePricedDatesHeaders
        }
      );
    } catch (err) {
      this.logger.debug(err);
    }

    let data = undefined;
    try {
      data = JSON.parse(JSON.parse(response.data.split('\n')[3])[0][2])[1];
    } catch (e) { }

    if (!data) {
      throw new InternalServerErrorException('Failed to fetch prices. Check your args');
    }

    let pricedDates: PricedDate[] | null = null;
    try {
      pricedDates = data.map(([date, , priceArr]) => ({ date: moment(date, 'YYYY-MM-DD').toDate(), price: priceArr?.[0]?.[1] })).filter((pricedDate: PricedDate) => !!pricedDate.price)
    } catch (e) { }

    if (!pricedDates) {
      throw new InternalServerErrorException('Failed to resolve priced dates');
    }

    const insertedData = await Promise.all(pricedDates.map(async (pricedDate) => await this.prismaService.pricedDate.create({ data: pricedDate })));
    return insertedData;
  }
}