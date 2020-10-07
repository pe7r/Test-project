import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialStore } from './store'

const algorithmsSlice = createSlice({
    name: 'algorithms',
    initialState: initialStore,
    reducers: {
        removeRecFromSelected: (state, {payload}: PayloadAction<string>) => {
            state.selectedRecommendationsIds = state.selectedRecommendationsIds.filter(item => item !== payload)
        },
        addRecToSelected: (state, {payload}: PayloadAction<string>) => {
            if (!state.selectedRecommendationsIds.includes(payload)) {
                state.selectedRecommendationsIds.push(payload)
            }
        },
        addAllToSelected: (state) => {
            const newSelectedArr: string[] = [];
            state.algorithms.forEach(alg => {
                alg.recommendations.forEach((rec) => {
                    newSelectedArr.push(rec.id);
                })
            })

            state.selectedRecommendationsIds = newSelectedArr;
        },
        addOneAlgRecs: (state, {payload}: PayloadAction<string>) => {
            state.algorithms.forEach(alg => {
                if (alg.id === payload) {
                    alg.recommendations.forEach((rec) => {
                        if (!state.selectedRecommendationsIds.includes(rec.id)) {
                            state.selectedRecommendationsIds.push(rec.id);
                        }
                    })
                }
            })
        }
    }
})

export default algorithmsSlice.reducer;

export const { removeRecFromSelected, addRecToSelected, addAllToSelected, addOneAlgRecs } = algorithmsSlice.actions