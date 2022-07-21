import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from './modules/Users.module'
import { WeightModule } from './modules/Weight.module'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/WeightTrackingDb'),
        UsersModule,
        WeightModule,
    ],
})
export class AppModule {}
