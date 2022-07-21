import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type WeightDocument = Weight & Document

@Schema()
export class Weight {
    @Prop({ required: true })
    date: Date

    @Prop({ required: true })
    weight: number
}

export const WeightSchema = SchemaFactory.createForClass(Weight)
