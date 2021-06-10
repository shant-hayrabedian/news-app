import React from 'react'
import { Checkbox } from 'antd';
import { Row, Col, Form } from 'antd';
import { useHistory } from 'react-router';
import { useQuery } from '../../../../functions/URLSearchParams';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSourceQuery, setCountryCode } from '../../../../redux/features/filterSlice/actionCreators';

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

    const countryC = query.get('country')
    const categor = query.get('category')
    // console.log(source)
    const dispatch = useDispatch()

        const pushUrl = (e, sourceQuery, countryCode, category) => {
            if(countryChecked && categoryChecked){
                history.push(`/search?country=${countryCode}&category=${category}`)
            }
            if(countryCode){
                history.push(`/search?country=${countryCode}`)
            }else if(category){
                history.push(`/search?category=${category}`)
            } else{
                history.push(`/search?source=${sourceQuery}`)

            }
        

        }

        const clicked =(e, sourceQuery, countryCode, category) => {
            if(countryChecked === true && categoryChecked === true){
                history.push(`/search?country=${countryCode}&category=${category}`)
            }
        }


   

    return (
        
        <Col span={5}
            style={{ margin: '15px 20px 5px 20px' }}
        >
            <Checkbox
                checked={idOfSelected === id.toString()}
                value={id}
                onChange={(e)=> {
                    onChange(e)
                }}
                onClick={(e)=> {
                    toggleCheck(e)
                    if(e.target.checked){
                    pushUrl(null, sourceQuery, countryCode, category)
                }
                    // clicked(null, sourceQuery, countryCode, category)
                }}>
                {name}
            </Checkbox>
        </Col>
    )
}

export default CheckboxesRender
