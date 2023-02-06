import { Module } from '@nestjs/common';
import { TicketModule } from './modules/Ticket/ticket.module';
import { ScheduleModule } from '@nestjs/schedule';
import { StorageModule } from './modules/Storage/storage.module';
import { BotModule } from './modules/Bot/bot.module';

@Module({
  imports: [
    BotModule,
    ScheduleModule.forRoot(),
    TicketModule,
    StorageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
