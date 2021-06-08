import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSource, showSource, testing } from '../../../redux/features/filterSlice/actionCreators';



const Category = () => {
    // const state = useSelector(state => state.Filter.selectedCategoriesIDes)
    // const sourceVisible = useSelector(state => state.Filter.sourceVisible)
    // const sourceVisible2 = useSelector(state => state.Filter.sourceVisible2)
    const [idOfSelected, setIdOfSelected] = useState('')

    const dispatch = useDispatch()

    const toggleCheck = (e) => {
        console.log(e)
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

        if (!e.target.check) {
            dispatch(testing(true))
        }
    }
    const categoriesData = ['entertainment', 'sports',   'business', 'general', 'technology',  'health',  'science']
    const categories = categoriesData.map((category, index) => {
        return {
            value: category,
            id: index + 1
        }
    })


    return (
        <div className='item'>
            <h3 style={{fontWeight: 'bold', fontSize: 18}}>Category</h3>
            <Row justify='start' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {/* <Checkbox.Group onChange={onChange} onClick={toggleCheck} options={categories}   > */}
                {categories.map((category, index) => {
                    return <Col span={6}
                        style={{ marginTop: 16 }}
                        key={category.id}
                    >
                        <Checkbox
                            checked={idOfSelected === category.id.toString()}
                            value={category.id}
                            onChange={onChange}
                            onClick={toggleCheck}>
                            {category.value[0].toUpperCase() + category.value.slice(1)}
                        </Checkbox>
                    </Col>
                })}
                {/* </Checkbox.Group> */}
            </Row>
        </div>
    )
}
export default Category