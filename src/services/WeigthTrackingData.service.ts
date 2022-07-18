import { Injectable } from '@nestjs/common'
import { DetailedWeightTableInterface } from 'src/interfaces/DetailedWeightTable.interface'
import { GeneralWeihtTableInterface } from 'src/interfaces/GeneralWeightTable.interface'
import { WeigthTrackingGraphInterface } from 'src/interfaces/WeightTrackingGraph.interface'
import { NewWeightTrackingDataInterface } from 'src/interfaces/NewWeightTrackingData.interface'

@Injectable()
export class WeigthTrackingDataService {
    CreateWeightTrackingData(newTrackingData: NewWeightTrackingDataInterface) {
        console.log(newTrackingData)
    }
    GeneralWeihtTable(readDetailedData: GeneralWeihtTableInterface) {
        console.log(readDetailedData)
    }
    DetailedWeightTable(readGeneralData: DetailedWeightTableInterface) {
        console.log(readGeneralData)
    }
    WeigthTrackingGraph(readGraphData: WeigthTrackingGraphInterface) {
        console.log(readGraphData)
    }
}
