import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    firstname: string

    @Prop({ required: true })
    lastname: string

    @Prop({ required: true })
    password: string

    @Prop({ required: true })
    age: number

    @Prop({ required: true })
    height: number

    @Prop({ required: true })
    targetWeight: number
}

export const userSchema = SchemaFactory.createForClass(User)
