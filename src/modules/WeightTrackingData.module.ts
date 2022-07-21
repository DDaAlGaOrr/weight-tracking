import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { WeightTrackingDataController } from './../controllers/weightTrackingData.controller'
import { WeigthTrackingDataService } from './../services/WeigthTrackingData.service'
import {
    WeightData,
    WeightDataSchema,
} from './../schemas/WeightTrackingData.schema'
@Module({
    controllers: [WeightTrackingDataController],
    providers: [WeigthTrackingDataService],
    imports: [
        MongooseModule.forFeature([
            {
                name: WeightData.name,
                schema: WeightDataSchema,
            },
        ]),
    ],
})
export class WeightTrackingDataModule {}
