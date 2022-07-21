import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { WeightController } from '../controllers/Weight.controller'
import { Weight, WeightSchema } from '../schemas/Weight.schema'
import { WeightService } from '../services/Weight.service'

@Module({
    controllers: [WeightController],
    providers: [WeightService],
    imports: [
        MongooseModule.forFeature([
            {
                name: Weight.name,
                schema: WeightSchema,
            },
        ]),
    ],
})
export class WeightModule {}
