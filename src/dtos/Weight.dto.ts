import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator'

export class ValidateWeight {
    @IsNotEmpty()
    @IsNumber()
    weight: number

    @IsNotEmpty()
    date: string

    @IsNotEmpty()
    @IsString()
    userId: string
}
