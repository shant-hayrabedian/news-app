import React from 'react'
import { Checkbox } from 'antd';
import { Col } from 'antd';
import { useHistory } from 'react-router';
import { useQuery } from '../../../../functions/URLSearchParams';
import { useDispatch } from 'react-redux';
import { toEmptyTheArrayFromFilter } from '../../../../redux/features/filterSlice/actionCreators';
import { resetPage } from '../../../../redux/features/pageSlice/actionCreators';
import { toEmptyTheSingleSourceArray } from '../../../../redux/features/singleSourceSlice/actionCreators';
import { toEmptyTheSearchedArray } from '../../../../redux/features/headerSearchSlice/actionCreators';
import PropTypes from 'prop-types'

const CheckboxesRender = (props) => {



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
    const history = useHistory()
    const query = useQuery()


    const countryCodeFromQuery = query.get('country')
    const categoryFromQuery = query.get('category')
    const dispatch = useDispatch()


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
CheckboxesRender.propTypes={
    idOfSelected: PropTypes.string,
    id: PropTypes.number,
    onChange: PropTypes.func,
    toggleCheck: PropTypes.func,
    name: PropTypes.string,
    sourceQuery: PropTypes.string,
    countryCode: PropTypes.string,
    category: PropTypes.string,
}