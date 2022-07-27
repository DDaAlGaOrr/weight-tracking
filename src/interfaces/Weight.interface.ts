export interface WeigthGraphInterface {
    weight: number
    date: string
}
export interface NewWeightInterface {
    weight: number
    date: Date
    userId: string
}
export interface GeneralWeihtTableInterface {
    initialWeight: number
    actualWeight: number
    targetWeight: number
}
export interface DetailedWeightTableInterface {
    date: string
    actualWeight: number
    loseWeight: number
    IMC: number
}
