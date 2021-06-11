import { Checkbox } from 'antd';
import { Row, Col, Form } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { max } from '../../../lib/CONSTANTS';
import { showCountryAndCategory, hideCountryAndCategory, setSourceQuery, setSourceIdState } from '../../../redux/features/filterSlice/actionCreators';
import CheckboxesRender from './Checkbox/CheckboxesRender';
import { DownOutlined, UpOutlined } from '@ant-design/icons';


const Source = () => {
    const sourceIdState = useSelector(state => state.Filter.checkBoxIdState.sourceIdState)

    const [showLess, setShowLess] = useState(true)

    const dispatch = useDispatch()

    const toggleCheck = (e) => {
        const val = e.target.value
        if (sourceIdState === val) {
            dispatch(setSourceIdState(''))
        } else {
            dispatch(setSourceIdState(val))
        }
    }

    function onChange(e) {
        if (e.target.checked) {
            dispatch(hideCountryAndCategory())
        } else {
            dispatch(showCountryAndCategory())
        }
    }

    const sourcesData = useSelector(state => state.FetchedSources.sources)
    const sources = sourcesData.map((source, index) => {
        return {
            query: source.id,
            name: source.name,
            id: index + 1
        }
    })




    const sourcesRender = sources.map((source, index) => {
        if (showLess && index < max) {
            return <CheckboxesRender key={source.id}
                idOfSelected={sourceIdState}
                id={source.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={source.name}
                sourceQuery={source.query} />

        }
        if (!showLess) {
            return <CheckboxesRender key={source.id}
                idOfSelected={sourceIdState}
                id={source.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={source.name}
                sourceQuery={source.query} />


        }
    })


    return (
        <div className='item'>
            <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Source</h3>
            <a
                onClick={() => showLess ? setShowLess(false) : setShowLess(true)}
            >
                {showLess ? <UpOutlined /> : <DownOutlined />}
                {showLess ? 'more' : 'less'}
            </a>


            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>


                {sourcesRender}

            </Row>
        </div>
    )
}
export default Source
