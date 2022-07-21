import { IsDate, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator'
export class ValidateNewWeightTrackingData {
    @IsNotEmpty()
    @IsNumber()
    weight: number

    @IsNotEmpty()
    @IsDate()
    date: string
}
