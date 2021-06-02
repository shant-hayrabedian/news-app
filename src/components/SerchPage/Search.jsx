import React from 'react';
import 'antd/dist/antd.css';
import s from './Search.module.css'
import { Row, Col } from 'antd';
import Form from './form/Form';
import Clear from './form/Clear';
import Items from './Items.jsx'
import Sorted from './Sorted';

const Search = () => {

    return (
        <div className={s.space}>
            <Row justify='space-around'> 
                <Col xs={24} sm={24} md={14} lg={7}>
                    <Clear/>
                    <Form />
                </Col>
                <Col xs={24} sm={24} md={14} lg={15}>
                    <Sorted/>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                </Col>
            </Row>
        </div>
    );
}

export default Search;