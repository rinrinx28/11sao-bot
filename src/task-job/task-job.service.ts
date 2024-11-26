import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TaskJobService {
  constructor(private emitEvent2: EventEmitter2) {}
  // Cron job: Executes at the 45th second of every minute
  @Cron('5 */1 * * * *', {
    name: 'start.bot.24',
    timeZone: 'Asia/Ho_Chi_Minh',
  })
  handlerTurnOfMiniGame() {
    this.emitEvent2.emitAsync('start.bot.24');
  }

  @Cron('50 */3 * * * *', {
    name: 'start.bot.client',
    timeZone: 'Asia/Ho_Chi_Minh',
  })
  handlerTurnOnMiniGame() {
    this.emitEvent2.emitAsync('start.bot.client');
  }
}
