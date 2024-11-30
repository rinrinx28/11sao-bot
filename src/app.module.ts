import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventModule } from './event/event.module';
import { TaskJobService } from './task-job/task-job.service';
import { SocketClientService } from './socket/socket.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService, TaskJobService, SocketClientService],
})
export class AppModule {}
