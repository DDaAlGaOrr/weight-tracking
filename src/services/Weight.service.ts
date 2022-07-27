import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import {
    DetailedWeightTableInterface,
    GeneralWeihtTableInterface,
    NewWeightInterface,
    WeigthGraphInterface,
} from '../interfaces/Weight.interface'
import { Weight, WeightDocument } from '../schemas/Weight.schema'

interface DeleteWeight {
    id: number
}
@Injectable()
export class WeightService {
    constructor(
        @InjectModel(Weight.name)
        private weightModel: Model<WeightDocument>,
    ) {}
    async createWeight(newWeight: NewWeightInterface) {
        const result = await this.weightModel.create(newWeight)
        console.log(result.date.toLocaleDateString())
        return result
    }

    generalWeihtTable(): GeneralWeihtTableInterface {
        return {
            initialWeight: 91,
            actualWeight: 90,
            targetWeight: 75,
        }
    }

    detailedWeightTable(): DetailedWeightTableInterface {
        return {
            date: '07/12/2022',
            IMC: 34,
            actualWeight: 90,
            loseWeight: 1,
        }
    }
    weigthGraph(): WeigthGraphInterface {
        return {
            date: '07/11/2022',
            weight: 91,
        }
    }
    deleteWeight(id: DeleteWeight) {
        console.log(id)
    }
}
