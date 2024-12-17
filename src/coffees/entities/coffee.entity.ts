import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Final mongoose collection schema name will be 'coffees'
@Schema()
export class Coffee extends Document {
  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop([String])
  flavors: string[];

  @Prop({ default: 0 })
  recommendations: number;
}

export const CofeeSchema = SchemaFactory.createForClass(Coffee);
