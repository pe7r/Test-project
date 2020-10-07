import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CloseIcon from '@material-ui/icons/Close';

type TProps = {
    iconName?: string,
    buttonProps?: {[key: string]: any},
}

const ActionIconButton = ({iconName, buttonProps = {}}: TProps) => {
    const renderIconByName = (): JSX.Element => {
        if (iconName === 'close') {
            return <CloseIcon {...buttonProps} />
        }
        return <ArrowRightAltIcon {...buttonProps} onClick={(e) => buttonProps.onClick(e)}/>
    }

    return <>
        {renderIconByName()}
    </>
}

export default ActionIconButton
