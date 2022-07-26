import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'

import { User } from './User.schema'

export type HealthDocument = Health & Document

@Schema()
export class Health {
    @Prop({ required: true })
    age: number

    @Prop({ required: true })
    firstWeight: number

    @Prop({ required: true })
    height: number

    @Prop({ required: true })
    targetWeight: number

    @Prop({ required: true })
    IMC: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    userId: User
}

export const HealthSchema = SchemaFactory.createForClass(Health)
