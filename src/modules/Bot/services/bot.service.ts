import { Injectable } from "@nestjs/common";
import { BestDeal } from "@prisma/client";
import { PrismaService } from "src/modules/Storage/services/prisma.service";
import * as moment from 'moment';
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { EnvironmentVariables } from "src/interfaces";

@Injectable()
export class BotService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly httpService: HttpService,
    private readonly prismaService: PrismaService,
  ) { }

  async sendDeals(deals: BestDeal[]): Promise<void> {
    const dealsWithPrice = await Promise.all(deals.map(async (deal) => await this.prismaService.bestDeal.findFirst({ where: { id: deal.id }, include: { pricedDate: true } })));
    const dealsText = dealsWithPrice.map(({ pricedDate }) => `Promoção para dia ${moment(pricedDate.date).format('DD/MM')} com o valor de R$${pricedDate.price}`);
    if (!dealsText.length) return;
    const text = dealsText.join('\n');
    try {
      await this.httpService.axiosRef.post(
        `https://api.telegram.org/bot${this.configService.get('TELEGRAM_TOKEN')}/sendMessage`,
        {
          chat_id: this.configService.get('TELEGRAM_CHAT_ID'),
          text: text
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}