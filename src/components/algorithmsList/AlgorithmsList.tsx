import React from 'react'
import { IAlgorithmType} from '../../types'
import Algorithm from '../algorithm/Algorithm'

type TProps = {
    algorithms: IAlgorithmType[]
}

const AlgorithmsList = ({algorithms}: TProps) => {
    return <>
        {algorithms.map(alg => {
            return <Algorithm key={alg.id} algorithm={alg} />
        })}
    </>
}

export default AlgorithmsList
