import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, makeStyles, Box } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IAlgorithmType } from '../../types';
import RecommendationsList from '../recommendationsList/RecommendationsList';
import ActionIconButton from '../buttons/action-icon-button/ActionIconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addOneAlgRecs } from '../../store/slices/algorithms/algorithmsSlice';
import { RootState } from '../../store';

export type TProps = {
    algorithm: IAlgorithmType
}

const Algorithm = ({algorithm}: TProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedRecommendationsIds: Array<string> = useSelector((state: RootState) => state.algorithms.selectedRecommendationsIds);
    const isAllRecsSelected: boolean = algorithm.recommendations.every(rec => selectedRecommendationsIds.includes(rec.id))
    const isMoreThanOneRec: boolean = algorithm.recommendations && algorithm.recommendations.length > 1;
    const isActionShown: boolean = !isAllRecsSelected && isMoreThanOneRec;

    const addRecs = (e: React.SyntheticEvent<EventTarget>): void => {
        e.stopPropagation();
        dispatch(addOneAlgRecs(algorithm.id))
    }

    return (
        <Accordion className={classes.accordion} defaultExpanded>
            <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMoreIcon />}
                IconButtonProps={{
                    edge: "start",
                    className: classes.icon
                }}
            >
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Typography className={classes.title}>{algorithm.title}</Typography>
                    {isActionShown ? <ActionIconButton buttonProps={{onClick: addRecs, className: classes.actionIcon}} /> : null}
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <RecommendationsList selectedRecommendationsIds={selectedRecommendationsIds} recommendations={algorithm.recommendations} />
            </AccordionDetails>
        </Accordion>
    )
}

export default Algorithm

const useStyles = makeStyles(() => ({
    accordion: {
      marginBottom: 20,
      border: 'none',
      boxShadow: 'none',
      color: 'white',
      
      
      '&::before': {
        backgroundColor: 'inherit',
      },

      '&.MuiPaper-root': {
        backgroundColor: 'inherit'
      }
    },
    accordionSummary: {
        flexDirection: 'row-reverse',
    },
    icon: {
        color: 'white',
        
    },
    actionIcon: {
        width: '10%',
    },
    title: {
        fontWeight: 'bold',
    },
  }));