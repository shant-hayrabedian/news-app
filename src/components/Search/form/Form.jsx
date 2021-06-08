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

    const sourceVisible = useSelector(state => state.Filter.sourceVisible)
    const ccVisible = useSelector(state => state.Filter.ccVisible)
    const state = useSelector(state => state.Filter.sourceVisible2)
   const dispatch = useDispatch()

  
   
    return(
        <div className='items'>
          <SearchInput/>
        { ccVisible ? <Category/> : null}
         {ccVisible ? <Country/> : null}
        {sourceVisible === true && state === true ? <Source/> : null}  
      </div> 
    )
}
export default Form