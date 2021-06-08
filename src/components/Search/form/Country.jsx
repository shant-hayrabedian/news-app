import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countryCheckedUnchecked } from '../../../redux/features/filterSlice/actionCreators';
import { countries } from 'country-data'
import CheckboxesRender from './Checkbox/CheckboxesRender';
import { countriesAbb, max } from '../../../lib/CONSTANTS';


const Country = () => {

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
            dispatch(countryCheckedUnchecked(true))
        } else {
            dispatch(countryCheckedUnchecked(false))

        }

    }


    const countriesArray = countriesAbb.map((country, index) => {
        return {
            abbreviation: country,
            fullName: country === 'zh' ? "China" : countries[country.toUpperCase()]?.name,
            id: index + 1
        }
    })

    

    const countriesRender = countriesArray.map((country, index) => {
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
