import { Module } from '@nestjs/common'

import WeightTrackingController from './controllers/weightTracking.controller'

@Module({
    imports: [],
    controllers: [WeightTrackingController],
})
export class AppModule {}
