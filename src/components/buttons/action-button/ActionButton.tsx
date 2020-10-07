import React from 'react'
import { Button } from '@material-ui/core'

type TProps = {
    className: string,
    title: string,
    endIcon: JSX.Element

}

const ActionButton = ({ className, endIcon, title}: TProps) => {
    return (
        <Button
            className={className}
            endIcon={endIcon}
        >
            {title}
        </Button>
    )
}

export default ActionButton
