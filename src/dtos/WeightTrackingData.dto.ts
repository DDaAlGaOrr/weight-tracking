import { IsDate, IsNumber } from '@nestjs/class-validator'
export class ValidateCreateUser {
    @IsNumber()
    weight: number

    @IsDate()
    date: Date
}
