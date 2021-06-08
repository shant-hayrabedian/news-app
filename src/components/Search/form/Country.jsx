import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSource, showSource, setSelectedCategoriesIDes, testing } from '../../../redux/features/filterSlice/actionCreators';
import { countries } from 'country-data'
import CheckboxesRender from './Checkbox/CheckboxesRender';


const Country = () => {
    const state = useSelector(state => state.Filter.selectedCategoriesIDes)

    const [idOfSelected, setIdOfSelected] = useState('')

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
            dispatch(hideSource())
            dispatch(testing(false))
        }

        if (!e.target.checked) {
            dispatch(showSource())
        }

    }

    const countriesAbb = [
        "ae", "ar", "at", "au", "be", "bg", "br", "sa", "za",
        "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "se",
        "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in",
        "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng",
        "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru",
        "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve"
    ]

    const countries2 = countriesAbb.map((country, index) => {
        return {
            abbreviation: country,
            fullName: country === 'zh' ? "China" : countries[country.toUpperCase()]?.name,
            id: index + 1
        }
    })

    const [showLess, setShowLess] = useState(true)
    const max = 12

    const countriesRender = countries2.map((country, index) => {
        if (showLess && index < max) {
            return <CheckboxesRender key={country.id}
                idOfSelected={idOfSelected}
                id={country.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={country.fullName} />
            //     return <Col span={5}
            //     key={source.id}
            // >
            //     <Checkbox
            //         checked={selectedCategoriesIDes === source.id.toString()}
            //         value={source.id}
            //         onChange={onChange}
            //         onClick={toggleCheck}>
            //         {source.name}
            //     </Checkbox>
            // </Col>
        }
        if (!showLess) {
            return <CheckboxesRender key={country.id}
                idOfSelected={idOfSelected}
                id={country.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={country.fullName} />
            // return <Col span={5}
            //     key={source.id}
            // >
            //     <Checkbox
            //         checked={selectedCategoriesIDes === source.id.toString()}
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
            <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Country</h3>
            <button
                onClick={() => showLess ? setShowLess(false) : setShowLess(true)}
            >
                {showLess ? "more" : "less"}
            </button>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {countriesRender}
                {/* {countries2.map((country, index) => {
                    return <Col span={6}
                    style={{marginTop: 16}}
                        key={country.id}
                    >
                        <Checkbox
                            checked={selectedCategoriesIDes === country.id.toString()}
                            value={country.id}
                            onChange={onChange}
                            onClick={toggleCheck}>
                            {country.fullName}
                        </Checkbox>
                    </Col>
                })} */}
            </Row>
        </div>
    )
}
export default Country
