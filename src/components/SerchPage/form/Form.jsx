import 'antd/dist/antd.css';
import './Form.css'
import { Row, Col } from 'antd';
import Country from './Country';
import Category from './Category';
import Language from './Language';
import Source from './Source';
import SearchInput from './SearchInput';

const Form = () =>{
    return(
        <div className='items'>
          <SearchInput/>
          <Category/>
          <Country/>
          <Source/>
          <Language/>
        </div>
    )
}
export default Form