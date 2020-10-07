import React from 'react'
import { IRecommendationType } from '../../types'
import { Box, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx'
import ActionIconButton from '../buttons/action-icon-button/ActionIconButton';

interface IRecommendationProps {
    type?: string,
    isDisabled?: boolean,
    action: (id: string) => void
}

type TProps = IRecommendationProps & IRecommendationType;

const Recommedation = ({id, title, offset, supportPersentage, type, isDisabled, action}: TProps) => {
    const classes = useStyles();

    if (type === "selected") {
        return (
            <Box className={classes.selectedContainer}>
                <Typography>{title}</Typography>
                <Box display="flex" justifyContent="space-between" width="20%">
                    <Typography>{offset}</Typography>
                    <ActionIconButton iconName="close" buttonProps={{className: classes.selectedActionButton, onClick: () => action(id)}} />
                </Box>
            </Box>
        )
    }
    
    return (
        <Box className={clsx({[classes.disabled]: isDisabled}, classes.container)}>
            <Typography className={clsx(classes.title, classes.boxText)}>{title}</Typography>
            <Typography className={clsx(classes.offset, classes.boxText)}>{offset}</Typography>
            <Typography className={clsx(classes.boxText, classes.persentage)}>{supportPersentage}%</Typography>
            <ActionIconButton buttonProps={{className: clsx({[classes.disabledIcon]: isDisabled}, classes.actionIcon), onClick: () => action(id)}} />
        </Box>
    )
}

export default Recommedation;

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        padding: '16px 0',
    },
    selectedContainer: {
        backgroundColor: '#375462',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        marginBottom: 8,
        padding: 8,

    },
    disabled: {
        opacity: 0.5,
    },
    disabledIcon: {
        visibility: 'hidden'
    },
    boxText: {
      padding: '0 10px',
    },
    title: {
        width: '40%',
    },
    offset: {
        width: '25%',
    },
    persentage: {
        color: '#8BCE36',
        width: '25%',
    },
    actionIcon: {
        width: '10%',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    selectedActionButton: {
        cursor: 'pointer'
    },
  }));