import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { WeightController } from '../controllers/weight.controller'
import { WeigthService } from '../services/Weigth.service'
import { Weight, WeightSchema } from '../schemas/Weight.schema'
@Module({
    controllers: [WeightController],
    providers: [WeigthService],
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
