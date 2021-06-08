import 'antd/dist/antd.css';
import './Form.css'
import { Radio, Row, Col } from 'antd';
import Country from './Country';
import Category from './Category';
import Language from './Language'; // jnjel language component@
import Source from './Source';
import SearchInput from './SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react'

const Form = () =>{

    const ccVisible = useSelector(state => state.Filter.ccVisible)

    const countryChecked = useSelector(state => state.Filter.checked.countryChecked)
    const categoryChecked = useSelector(state => state.Filter.checked.categoryChecked)

  
   
    return(
        <div className='items'>
          <SearchInput/>
        { ccVisible ? <Category/> : null}
         {ccVisible ? <Country/> : null}
        {!categoryChecked && !countryChecked ? <Source/> : null}  
      </div> 
    )
}
export default Form