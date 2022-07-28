export interface WeigthGraphInterface {
    weight: number
    date: string
}
export interface NewWeightInterface {
    weight: number
    date: Date
    userId: string
}
export interface GeneralWeightTableInterface {
    initialWeight: number
    actualWeight: number
    targetWeight: number
}
export interface DetailedWeightTableInterface {
    date: string
    weight: number
    loseWeight: number
}
