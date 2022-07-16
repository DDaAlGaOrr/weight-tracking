import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({ required: true })
    username: string

    @Prop({ required: true })
    email: number

    @Prop({ required: true })
    password: string

    @Prop({ required: true })
    firstName: string

    @Prop({ required: true })
    lastName: string

    @Prop({ required: true })
    age: string

    @Prop({ required: true })
    height: number

    @Prop({ required: true })
    targetWeigth: number
}

export const CatSchema = SchemaFactory.createForClass(User)
