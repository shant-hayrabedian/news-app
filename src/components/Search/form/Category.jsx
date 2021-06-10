import { Checkbox } from 'antd';
import { Row, Col, Form } from 'antd';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesData } from '../../../lib/CONSTANTS';
import { categoryCheckedUnchecked, setCategory } from '../../../redux/features/filterSlice/actionCreators';
import CheckboxesRender from './Checkbox/CheckboxesRender';



const Category = () => {

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
            dispatch(categoryCheckedUnchecked(true))
        } else {
            dispatch(categoryCheckedUnchecked(false))
        }
    }


    const categories = categoriesData.map((category, index) => {
        return {
            value: category,
            id: index + 1
        }
    })


    return (
        <div className='item'>
            <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Category</h3>
            <Row justify='start' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {/* <Form.Item
                name='checkbox-group-category'
                valuePropName="checked"
            > */}
                {/* <Checkbox.Group> */}
                {categories.map((category, index) => {
                    return <CheckboxesRender key={category.id}
                        idOfSelected={idOfSelected}
                        id={category.id}
                        onChange={onChange}
                        toggleCheck={toggleCheck}
                        name={category.value[0].toUpperCase() + category.value.slice(1)}
                        category={category.value}
                    />
                })}
                {/* </Checkbox.Group> */}
                {/* </Form.Item> */}
            </Row>
        </div>
    )
}
export default Category