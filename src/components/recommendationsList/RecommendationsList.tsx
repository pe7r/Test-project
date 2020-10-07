import React from 'react'
import Recommendation from '../recommendation/Recommendation'
import { Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { IRecommendationType } from '../../types'
import { removeRecFromSelected, addRecToSelected } from '../../store/slices/algorithmsSlice'

type TProps = {
    recommendations: IRecommendationType[],
    type?: string,
    selectedRecommendationsIds?: string[]
}

const RecommendationsList = ({recommendations, type, selectedRecommendationsIds}: TProps) => {
    const dispatch = useDispatch();

    const isRecDisabled = (id: string): boolean => {
        if (selectedRecommendationsIds) {
            return selectedRecommendationsIds.includes(id);
        }
        return false;
    }

    const unselectRecommendation = (id: string): void => {
        dispatch(removeRecFromSelected(id))
    }

    const selectRecommendation = (id: string): void => {
        dispatch(addRecToSelected(id))
    }

    const action = type === "selected" ? unselectRecommendation : selectRecommendation;

    return (
        <Box width="100%">
            {recommendations.map(rec => {
                return (
                    <Recommendation
                        key={rec.id}
                        action={action}
                        type={type}
                        id={rec.id}
                        title={rec.title}
                        offset={rec.offset}
                        supportPersentage={rec.supportPersentage}
                        isDisabled={isRecDisabled(rec.id)}
                    />
                )
            })}
        </Box>
    )
}

export default RecommendationsList
