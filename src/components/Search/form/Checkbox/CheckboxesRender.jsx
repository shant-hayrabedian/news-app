import React from 'react'
import { Checkbox } from 'antd';
import { Row, Col } from 'antd';

const CheckboxesRender = (props) => {
    
    const {idOfSelected, id, onChange, toggleCheck, name} = props

    return (
        
        <Col span={5}
        style={{margin: '15px 20px 5px 20px'}}
        >
            <Checkbox
                checked={idOfSelected === id.toString()}
                value={id}
                onChange={onChange}
                onClick={toggleCheck}>
                {name}
            </Checkbox>
        </Col>
    )
}

export default CheckboxesRender
