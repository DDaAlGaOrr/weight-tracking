import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from './modules/Users.module'
import { WeightTrackingDataModule } from './modules/WeightTrackingData.module'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/WeightTrackingDb'),
        UsersModule,
        WeightTrackingDataModule,
    ],
})
export class AppModule {}
