import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({ required: true })
    date: Date

    @Prop({ required: true })
    weigth: number
}

export const CatSchema = SchemaFactory.createForClass(User)
