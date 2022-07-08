import { Module } from '@nestjs/common'

import { AppService } from './app.service'
import WeightTrackingController from './weightTracking.controller'

@Module({
    imports: [],
    controllers: [WeightTrackingController],
    providers: [AppService],
})
export class AppModule {}
