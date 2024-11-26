import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({
  timestamps: true,
})
export class Event {
  @Prop()
  value: number;

  @Prop({ default: false })
  status: boolean;

  @Prop({ default: 'Something' })
  description: string;

  @Prop({ unique: true })
  name: string;

  @Prop({ default: '{}' })
  option: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
