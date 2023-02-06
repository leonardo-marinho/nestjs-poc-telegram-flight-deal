import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from '../Bot/bot.module';
import { StorageModule } from '../Storage/storage.module';
import { ListTicketsJob } from './jobs/ListTickets.job';
import { TicketService } from './services/ticket.service';

@Module({
  imports: [
    BotModule,
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    HttpModule,
    StorageModule,
  ],
  providers: [ListTicketsJob, TicketService],
})
export class TicketModule { }