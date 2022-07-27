import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { WeightController } from '../controllers/Weight.controller'
import { Weight, WeightSchema } from '../schemas/Weight.schema'
import { WeightService } from '../services/Weight.service'
import { Health, HealthSchema } from './../schemas/Health.schema'
import { User, userSchema } from './../schemas/User.schema'

@Module({
    controllers: [WeightController],
    providers: [WeightService],
    imports: [
        MongooseModule.forFeature([
            {
                name: Weight.name,
                schema: WeightSchema,
            },
            {
                name: Health.name,
                schema: HealthSchema,
            },
            {
                name: User.name,
                schema: userSchema,
            },
        ]),
    ],
})
export class WeightModule {}
