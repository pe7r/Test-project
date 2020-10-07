import { IAlgorithmType } from "../../types";

interface InitialStore {
    algorithms: IAlgorithmType[],
    selectedRecommendationsIds: string[]
}

export const initialStore: InitialStore = {
    algorithms: [
        {
            id: '11',
            title: 'Global consts',
            recommendations: [
                {
                    title: 'Contst1',
                    offset: '0-1',
                    supportPersentage: 100,
                    id: '1',
                },
                {
                    title: 'Contst2',
                    offset: '0-1',
                    supportPersentage: 100,
                    id: '2',
                },
            ]
        },
        {
            id: '22',
            title: 'Checksums',
            recommendations: [
                {
                    title: 'headerChecksum',
                    offset: '11-12',
                    supportPersentage: 100,
                    id: '3',
                },
                {
                    title: 'bodyChecksum',
                    offset: '0-1',
                    supportPersentage: 100,
                    id: '4',
                },
            ]
        },
        {
            id: '33',
            title: 'Group',
            recommendations: [
                {
                    title: 'addingChecksum',
                    offset: '11-12',
                    supportPersentage: 100,
                    id: '5',
                },
            ]
        },
    ],
    selectedRecommendationsIds: ['1', '4']
}