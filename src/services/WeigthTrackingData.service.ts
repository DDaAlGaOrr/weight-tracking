import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'

import { DetailedWeightTableInterface } from './../interfaces/DetailedWeightTable.interface'
import { GeneralWeihtTableInterface } from './../interfaces/GeneralWeightTable.interface'
import { NewWeightTrackingDataInterface } from './../interfaces/NewWeightTrackingData.interface'
import { WeigthTrackingGraphInterface } from './../interfaces/WeightTrackingGraph.interface'
import {
    WeightData,
    WeightDataDocument,
} from './../schemas/WeightTrackingData.schema'

interface DeleteWeightData {
    id: number
}
@Injectable()
export class WeigthTrackingDataService {
    constructor(
        @InjectModel(WeightData.name)
        private weightDataModel: Model<WeightDataDocument>,
    ) {}
    async createWeightTrackingData(
        newWeightData: NewWeightTrackingDataInterface,
    ) {
        const result = await this.weightDataModel.create(newWeightData)
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
    weigthTrackingGraph(): WeigthTrackingGraphInterface {
        return {
            date: '07/11/2022',
            weight: 91,
        }
    }
    deleteWeightTrackingData(id: DeleteWeightData) {
        console.log(id)
    }
}
