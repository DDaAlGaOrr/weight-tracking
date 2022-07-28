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
        await this.weightModel.create(newWeight)
        return { create: true }
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
        const weightData = await this.weightModel.find({ userId: userId })
        const healtData = await this.healthModel.find({
            userId: userId,
        })
        const detailedTable: DetailedWeightTableInterface[] = []
        weightData.forEach((weightMdl) => {
            healtData.forEach((healtMdl) => {
                detailedTable.push({
                    date: weightMdl.date.toLocaleDateString(),
                    weight: weightMdl.weight,
                    loseWeight: healtMdl.firstWeight - weightMdl.weight,
                })
            })
        })
        return detailedTable
    }

    async weigthGraph(userId): Promise<WeigthGraphInterface[]> {
        const data = await this.weightModel.find({ userId: userId })
        const chart: WeigthGraphInterface[] = []
        data.forEach((element) => {
            chart.push({
                date: element.date.toLocaleDateString(),
                weight: element.weight,
            })
        })
        return chart
    }
    deleteWeight(id: DeleteWeight) {
        return 'delete data'
    }
}
