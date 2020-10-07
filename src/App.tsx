import React from 'react'
import Box from '@material-ui/core/Box';
import AlgorithmsList from './components/algorithmsList/AlgorithmsList';
import { makeStyles } from '@material-ui/core';
import RecommendationsList from './components/recommendationsList/RecommendationsList';
import ActionIconButton from './components/buttons/action-icon-button/ActionIconButton';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from './store/index'
import {addAllToSelected} from './store/slices/algorithms/algorithmsSlice'
import { IRecommendationType, IAlgorithmType } from './types';
import clsx from 'clsx';
import ActionButton from './components/buttons/action-button/ActionButton';

const getAllSelectedRecsFromAlgorithms = (algorithms: Array<IAlgorithmType>, selectedRecommendationsIds: Array<string>): Array<IRecommendationType> => {
    let selectedRecs: Array<IRecommendationType> = [];
    algorithms.forEach(alg => {
        alg.recommendations.forEach(rec => {
            if (selectedRecommendationsIds.includes(rec.id)) {
                selectedRecs.push(rec);
            }
        })
    })
    return selectedRecs;
}

const getAllRecsCount = (algorithms: Array<IAlgorithmType>): number => {
    let selectedRecs: Array<string> = [];
    algorithms.forEach(alg => {
        alg.recommendations.forEach(rec => {
            selectedRecs.push(rec.id);
        })
    })
    return selectedRecs.length;
}


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const algorithms: Array<IAlgorithmType> = useSelector((state: RootState) => state.algorithms.algorithms)
    const selectedRecommendationsIds: Array<string> = useSelector((state: RootState) => state.algorithms.selectedRecommendationsIds)
    const selectedRecs: Array<IRecommendationType> = getAllSelectedRecsFromAlgorithms(algorithms, selectedRecommendationsIds);
    const isAllRecsSelected: boolean = selectedRecommendationsIds.length === getAllRecsCount(algorithms);

    const addAllRecsToSelected = (): void => {
        dispatch(addAllToSelected())
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.left}> 
                <Box className={clsx({[classes.selectAllDisabled]: isAllRecsSelected},classes.selectAllContainer)} onClick={addAllRecsToSelected}>
                    <ActionButton
                        className={classes.selectAllButton}
                        endIcon={<ActionIconButton buttonProps={{className: classes.selectAllButton}} />}
                        title="Accept All"
                    />
                </Box>
                <AlgorithmsList algorithms={algorithms} />
            </Box>
            <Box className={classes.right}>
                <RecommendationsList recommendations={selectedRecs} type="selected" />
            </Box>
        </Box>
    )
}

export default App


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2em',
        backgroundColor: '#272727',
        minHeight: '99vh',

        '@media (max-width:767px)': {
            flexDirection: 'column',
            minHeight: 'auto'
        },
    },
    left: {
        backgroundColor: '#272D38',
        width: '50%',
        marginRight: 16,

        '@media (max-width:767px)': {
            width: '100%',
            margin: 0,
            marginBottom: 16,
        },
    },
    right: {
        backgroundColor: '#174154',
        width: '50%',
        marginLeft: 16,
        padding: 16,
        boxSizing: 'border-box',

        '@media (max-width:767px)': {
            width: '100%',
            margin: 0,
        },
    },
    selectAllContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
        padding: '16px 8px',
    },
    selectAllButton: {
        color: 'white',
        paddingRight: 5,
        marginRight: 0,
    },
    selectAllDisabled: {
        display: 'none'
    },
}))