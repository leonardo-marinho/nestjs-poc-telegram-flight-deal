import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cron, CronExpression } from "@nestjs/schedule";
import { EnvironmentVariables } from "src/interfaces";
import { BotService } from "src/modules/Bot/services/bot.service";
import { TicketService } from "../services/ticket.service";

@Injectable()
export class ListTicketsJob {
  constructor(
    private readonly botService: BotService,
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly ticketService: TicketService
  ) { }

  @Cron(CronExpression.EVERY_MINUTE)
  async run() {
    const pricedDates = await this.ticketService.updatePricedDates({
      startDate: this.configService.get('TICKET_SEARCH_START_DATE'),
      endDate: this.configService.get('TICKET_SEARCH_END_DATE'),
    });

    const deals = await this.ticketService.updateBestDeals(pricedDates);

    this.botService.sendDeals(deals);
  }
}