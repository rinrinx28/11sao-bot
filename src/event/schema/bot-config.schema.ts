import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type BotConfigDocument = HydratedDocument<BotConfig>;

@Schema({
  timestamps: true,
})
export class BotConfig {
  @Prop({ type: SchemaTypes.Mixed, default: {} })
  meta: Record<string, any>;

  @Prop({ unique: true })
  uid: string;

  @Prop({ default: false })
  isAvailable: boolean;

  updatedAt?: Date;
  createdAt?: Date;
}

export const BotConfigSchema = SchemaFactory.createForClass(BotConfig);
