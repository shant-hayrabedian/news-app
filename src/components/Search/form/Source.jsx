import { Checkbox } from 'antd';
import { Row, Col, Form} from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { max } from '../../../lib/CONSTANTS';
import { showCountryAndCategory, hideCountryAndCategory, setSourceQuery } from '../../../redux/features/filterSlice/actionCreators';
import CheckboxesRender from './Checkbox/CheckboxesRender';
import { DownOutlined, UpOutlined } from '@ant-design/icons';


const Source = () => {

    const [idOfSelected, setIdOfSelected] = useState('')
    const [showLess, setShowLess] = useState(true)

    const dispatch = useDispatch()
    const toggleCheck = (e) => {
        const val = e.target.value
        if (idOfSelected === val) {
            setIdOfSelected('')
        } else {
            setIdOfSelected(val)
        }
    }

    function onChange(e, source) {
        if (e.target.checked) {
            dispatch(hideCountryAndCategory())
        } else {
            dispatch(showCountryAndCategory())
        }
    }

    const sourcesData = useSelector(state => state.FetchedSources.sources)
    const stat = useSelector(state => console.log(state))
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
                idOfSelected={idOfSelected}
                id={source.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={source.name}
                sourceQuery={source.query} />
            // return <Col span={5}
            //     key={source.id}
            // >
            //     <Checkbox
            //         checked={idOfSelected === source.id.toString()}
            //         value={source.id}
            //         onChange={onChange}
            //         onClick={toggleCheck}>
            //         {source.name}
            //     </Checkbox>
            // </Col>
        }
        if (!showLess) {
            return <CheckboxesRender key={source.id}
                idOfSelected={idOfSelected}
                id={source.id}
                onChange={(e) => onChange(e, source.query)}
                toggleCheck={toggleCheck}
                name={source.name}
                sourceQuery={source.query} />

            // return <Col span={5}
            //     key={source.id}
            // >
            //     <Checkbox
            //         checked={idOfSelected === source.id.toString()}
            //         value={source.id}
            //         onChange={onChange}
            //         onClick={toggleCheck}>
            //         {source.name}
            //     </Checkbox>
            // </Col>
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

            {/* <Form.Item
                name='checkbox-group-source'
                valuePropName="checked"
            > */}
            {/* <Checkbox.Group> */}
                {sourcesRender}
            {/* </Checkbox.Group> */}
            {/* </Form.Item> */}
            </Row>
        </div>
    )
}
export default Source
