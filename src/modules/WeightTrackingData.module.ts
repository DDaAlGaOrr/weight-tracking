import { Module } from '@nestjs/common'

import { WeightTrackingDataController } from './../controllers/weightTrackingData.controller'
import { WeigthTrackingDataService } from './../services/WeigthTrackingData.service'

@Module({
    controllers: [WeightTrackingDataController],
    providers: [WeigthTrackingDataService],
})
export class WeightTrackingDataModule {}
