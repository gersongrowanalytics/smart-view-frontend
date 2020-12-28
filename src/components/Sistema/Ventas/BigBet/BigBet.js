import React from 'react'
import TituloBigBet from './TituloBigBet'
import {Col, Row} from "antd";
import CardCategoriaBigBet from './CardCategoriaBigBet'

const BigBet = (props) => {

    return (
        <div>
            <TituloBigBet />

            <Row justify="space-between">
                {
                    [{},{},{},{},{}].map((data, posicion) => {
                        return (
                            <CardCategoriaBigBet />
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default BigBet
