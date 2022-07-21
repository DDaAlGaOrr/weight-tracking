import { IsNotEmpty, IsNumber } from '@nestjs/class-validator'

export class ValidateWeight {
    @IsNotEmpty()
    @IsNumber()
    weight: number

    @IsNotEmpty()
    date: string
}
