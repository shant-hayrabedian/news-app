import { Checkbox } from 'antd';
import { Row, Col, Form } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countryCheckedUnchecked, setCountryCode, setCountryIdState } from '../../../redux/features/filterSlice/actionCreators';
import { countries } from 'country-data'
import CheckboxesRender from './Checkbox/CheckboxesRender';
import { countriesAbb, max } from '../../../lib/CONSTANTS';
import { DownOutlined, UpOutlined } from '@ant-design/icons';


const Country = () => {

    const countryIdState = useSelector(state => state.Filter.checkBoxIdState.countryIdState)

    const [showLess, setShowLess] = useState(true)

    const dispatch = useDispatch()

    const toggleCheck = (e) => {
        const val = e.target.value
        if (countryIdState === val) {
            dispatch(setCountryIdState(''))
        } else {
            dispatch(setCountryIdState(val))
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
                idOfSelected={countryIdState}
                id={country.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={country.fullName}
                countryCode={country.abbreviation} />

        }
        if (!showLess) {
            return <CheckboxesRender key={country.id}
                idOfSelected={countryIdState}
                id={country.id}
                onChange={onChange}
                toggleCheck={toggleCheck}
                name={country.fullName}
                countryCode={country.abbreviation} />

        }
    })

    return (
        <div className='item'>
            <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Country</h3>
            <a
                onClick={() => showLess ? setShowLess(false) : setShowLess(true)}
            >
                {showLess ? <UpOutlined /> : <DownOutlined />}
                {showLess ? 'more' : 'less'}
            </a>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                {countriesRender}

            </Row>
        </div>
    )
}
export default Country
