import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideCC, setSelectedCategoriesIDes, showCC } from '../../../redux/features/filterSlice/actionCreators';
import CheckboxesRender from './Checkbox/CheckboxesRender';


const Source = () => {

    // const state = useSelector(state => state.Filter.selectedCategoriesIDes)

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


    function onChange(e) {
        if (e.target.checked) {
            dispatch(hideCC())

        } else {
            dispatch(showCC())
        }
    }
    
    const sourcesData = useSelector(state => state.FetchedSources.sources)

    const sources = sourcesData.map((source, index) => {
        return {
            value: source.id,
            name: source.name,
            id: index + 1
        }
    })



    const max = 12

    const sourcesRender = sources.map((source, index) => {
        if (showLess && index < max) {
            return <CheckboxesRender key={source.id}
                idOfSelected={idOfSelected}
                id={source.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={source.name} />
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
        return    <CheckboxesRender key={source.id}
            idOfSelected={idOfSelected}
            id={source.id}
            onChange={onChange}
            toggleCheck={toggleCheck}
            name={source.name} />

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
            <button
                onClick={() => showLess ? setShowLess(false) : setShowLess(true)}
            >
                {showLess ? "more" : "less"}
            </button>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {sourcesRender}
            </Row>
        </div>
    )
}
export default Source
