import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import WeightTrackingController from './controllers/weightTracking.controller'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/weightTracking'),
    ],
    controllers: [WeightTrackingController],
})
export class AppModule {}
