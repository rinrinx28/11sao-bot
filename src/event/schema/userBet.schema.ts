import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserBetDocument = UserBet & Document;

@Schema({
  timestamps: true,
})
export class UserBet {
  @Prop()
  uid: string;

  @Prop()
  betId: string;

  @Prop()
  amount: number;

  @Prop()
  result: string;

  @Prop({ default: '' })
  resultBet: string;

  @Prop()
  server: string;

  @Prop({ default: 0 })
  receive: number;

  @Prop({ default: false })
  isEnd: boolean;

  @Prop()
  name: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export const UserBetSchema = SchemaFactory.createForClass(UserBet);
