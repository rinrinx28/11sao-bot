import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { User, UserSchema } from './schema/user.schema';
import { BotConfig, BotConfigSchema } from './schema/bot-config.schema';
import { Event, EventSchema } from './schema/config.schema';
import { BetLog, BetLogSchema } from './schema/bet-log.schema';
import { BetServer, BetServerSchema } from './schema/bet-sv.schema';
import { UserBet, UserBetSchema } from './schema/userBet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: BotConfig.name,
        schema: BotConfigSchema,
      },
      { name: Event.name, schema: EventSchema },
      { name: BetLog.name, schema: BetLogSchema },
      { name: BetServer.name, schema: BetServerSchema },
      { name: UserBet.name, schema: UserBetSchema },
    ]),
    HttpModule,
  ],
  providers: [EventService],
  controllers: [EventController],
  exports: [],
})
export class EventModule {}
