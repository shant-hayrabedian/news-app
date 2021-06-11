import React, { useEffect, useState } from 'react'
import { Checkbox } from 'antd';
import { Row, Col, Form } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { useQuery } from '../../../../functions/URLSearchParams';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSourceQuery, setCountryCode, toEmptyTheArrayFromFilter } from '../../../../redux/features/filterSlice/actionCreators';
import { changeOrder, resetPage } from '../../../../redux/features/pageSlice/actionCreators';
import { toEmptyTheSingleSourceArray } from '../../../../redux/features/singleSourceSlice/actionCreators';
import { toEmptyTheSearchedArray } from '../../../../redux/features/headerSearchSlice/actionCreators';

const CheckboxesRender = (props) => {

    const countryChecked = useSelector(state => state.Filter.checked.countryChecked)
    const categoryChecked = useSelector(state => state.Filter.checked.categoryChecked)

    const {
        idOfSelected,
        id,
        onChange,
        toggleCheck,
        name,
        sourceQuery,
        countryCode,
        category
    } = props
    // console.log(sourceQuery, countryCode, category)
    const history = useHistory()
    const query = useQuery()

    const source = query.get('source')

    const countryCodeFromQuery = query.get('country')
    const categoryFromQuery = query.get('category')
    // console.log(source)
    const dispatch = useDispatch()

    const location = useLocation()

 




    const pushUrl = (e, sourceQuery, countryCode, category) => {


        if (e.target.checked) {
            if (countryCode) {
                history.push(`/search?country=${countryCode}${categoryFromQuery ? '&category=' + categoryFromQuery : ''}`)
            } else if (category) {
                history.push(`/search?category=${category}${countryCodeFromQuery ? '&country=' + countryCodeFromQuery : ''}`)

            } else {
                history.push(`/search?source=${sourceQuery}`)

            }
        } else {
            if (countryCode) {
                history.push(`/search?${categoryFromQuery ? "category=" + categoryFromQuery : ''}`)
            } else if (category) {
                history.push(`/search?${countryCodeFromQuery ? "country=" + countryCodeFromQuery : ''}`)
            }
         
        }

   



    }




    return (

        <Col span={5}
            style={{ margin: '15px 20px 5px 20px' }}
        >

            <Checkbox
                checked={idOfSelected === id.toString()}
                value={id}
                onChange={(e) => {
                    onChange(e)
                }}
                onClick={(e) => {
                    toggleCheck(e)
                    // dispatch(changeOrder('latest'))
                    pushUrl(e, sourceQuery, countryCode, category);
                    dispatch(toEmptyTheSingleSourceArray())
                    dispatch(toEmptyTheSearchedArray())
                    dispatch(toEmptyTheArrayFromFilter());
                    dispatch(resetPage(1))

                }}>
                {name}
            </Checkbox>
        </Col>
    )
}

export default CheckboxesRender
