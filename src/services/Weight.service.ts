import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import {
    DetailedWeightTableInterface,
    NewWeightInterface,
    WeigthGraphInterface,
} from '../interfaces/Weight.interface'
import { Weight, WeightDocument } from '../schemas/Weight.schema'
import { Health, HealthDocument } from './../schemas/Health.schema'
import { User, UserDocument } from './../schemas/User.schema'

interface DeleteWeight {
    id: number
}
@Injectable()
export class WeightService {
    constructor(
        @InjectModel(Weight.name) private weightModel: Model<WeightDocument>,
        @InjectModel(Health.name) private healthModel: Model<HealthDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}
    async createWeight(newWeight: NewWeightInterface) {
        const result = await this.weightModel.create(newWeight)
        return result
    }

    async generalWeightTable(userId) {
        const healtData = await this.healthModel.find({
            userId: userId,
        })
        const weightData = await this.weightModel.find({
            userId: userId,
        })
        return {
            initialWeight: healtData[0].firstWeight,
            targetWeight: healtData[0].targetWeight,
            actualWeight: weightData[weightData.length - 1].weight,
        }
    }

    async detailedWeightTable(userId): Promise<DetailedWeightTableInterface[]> {
        const data = await this.weightModel.find({ userId: userId })
        const detailedTable: DetailedWeightTableInterface[] = []
        data.forEach((element) => {
            detailedTable.push({
                actualWeight: element.weight,
                date: element.date.toLocaleDateString(),
            })
        })
        return detailedTable
    }
    weigthGraph(): WeigthGraphInterface {
        return {
            date: '07/11/2022',
            weight: 91,
        }
    }
    deleteWeight(id: DeleteWeight) {
        return 'delete data'
    }
}
