import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type WeightDataDocument = WeightData & Document

@Schema()
export class WeightData {
    @Prop({ required: true })
    date: Date

    @Prop({ required: true })
    weight: number
}

export const WeightDataSchema = SchemaFactory.createForClass(WeightData)
