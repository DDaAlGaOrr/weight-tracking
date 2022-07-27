import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'

import { User } from './User.schema'

export type WeightDocument = Weight & Document

@Schema()
export class Weight {
    @Prop({ required: true })
    date: Date

    @Prop({ required: true })
    weight: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    userId: User
}

export const WeightSchema = SchemaFactory.createForClass(Weight)
