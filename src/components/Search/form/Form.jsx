import 'antd/dist/antd.css';
import './Form.css'
import { Form, Radio, Row, Col, Button, Checkbox } from 'antd';
import Country from './Country';
import Category from './Category';
import Source from './Source';
import SearchInput from './SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react'
import { showCountryAndCategory } from '../../../redux/features/filterSlice/actionCreators';

const BigForm = () => {

  const ccVisible = useSelector(state => state.Filter.ccVisible)

  const countryChecked = useSelector(state => state.Filter.checked.countryChecked)
  const categoryChecked = useSelector(state => state.Filter.checked.categoryChecked)

  const dispatch = useDispatch()

  const [form] = Form.useForm();

  const resetFilter = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log("recived values of form", values)
  }


  return (
    // <div className='items'>
    <div >
      <Button onClick={() => {
        form.resetFields()
      }}>Clear</Button>
      <Form
        className="items"
        name="form"
        form={form}
        onFinish={onFinish}
      >

        <SearchInput />

        {ccVisible ? <Category /> : null}

        {ccVisible ? <Country /> : null}
        {!categoryChecked && !countryChecked ? <Source /> : null}
      </Form>
    </div>
    // </div> 
  )
}
export default BigForm