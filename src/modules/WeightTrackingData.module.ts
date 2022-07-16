import { Module } from '@nestjs/common'
import { WeightTrackingDataController } from 'src/controllers/weightTrackingData.controller'
import { WeigthTrackingDataService } from 'src/services/WeigthTrackingData.service'

@Module({
    controllers: [WeightTrackingDataController],
    providers: [WeigthTrackingDataService],
})
export class WeightTrackingDataModule {}
