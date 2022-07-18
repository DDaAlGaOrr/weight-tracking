import { IsDate, IsNumber } from '@nestjs/class-validator'
export class ValidateNewWeightTrackingData {
    @IsNumber()
    weight: number

    @IsDate()
    date: Date
}
