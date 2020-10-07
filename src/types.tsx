export interface IRecommendationType {
    title: string,
    offset: string,
    supportPersentage: number,
    id: string,
}

export interface IAlgorithmType { 
    title: string,
    id: string,
    recommendations: IRecommendationType[]
}