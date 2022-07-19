import { Injectable } from '@nestjs/common'
import { DetailedWeightTableInterface } from '../../src/interfaces/DetailedWeightTable.interface'
import { GeneralWeihtTableInterface } from '../../src/interfaces/GeneralWeightTable.interface'
import { NewWeightTrackingDataInterface } from '../../src/interfaces/NewWeightTrackingData.interface'
import { WeigthTrackingGraphInterface } from '../../src/interfaces/WeightTrackingGraph.interface'

interface DeleteWeightData {
    id: number
}
@Injectable()
export class WeigthTrackingDataService {
    createWeightTrackingData(newTrackingData: NewWeightTrackingDataInterface) {
        console.log(newTrackingData)
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
