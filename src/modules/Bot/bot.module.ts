import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StorageModule } from "../Storage/storage.module";
import { BotService } from "./services/bot.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    HttpModule,
    StorageModule,
  ],
  providers: [BotService],
  exports: [BotService]
})
export class BotModule { };