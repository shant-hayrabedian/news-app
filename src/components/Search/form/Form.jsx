import 'antd/dist/antd.css';
import './Form.css'
import { Form, Button } from 'antd';
import Country from './Country';
import Category from './Category';
import Source from './Source';
import SearchInput from './SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { categoryCheckedUnchecked, countryCheckedUnchecked, setCategoryIdState, setCountryIdState, setSourceIdState, showCountryAndCategory } from '../../../redux/features/filterSlice/actionCreators';
import { useHistory } from 'react-router';

const BigForm = () => {

  const ccVisible = useSelector(state => state.Filter.ccVisible)

  const countryChecked = useSelector(state => state.Filter.checked.countryChecked)
  const categoryChecked = useSelector(state => state.Filter.checked.categoryChecked)

  const dispatch = useDispatch()

  const [form] = Form.useForm();
  

  const history = useHistory()

  return (
    <div >
      <Button  type='primary' onClick={(e) => {
        form.resetFields()
        history.push(`/search`)
        dispatch(setCategoryIdState(''))
        dispatch(setCountryIdState(''))
        dispatch(setSourceIdState(''))
        dispatch(showCountryAndCategory())
        dispatch(categoryCheckedUnchecked(false))
        dispatch(countryCheckedUnchecked(false))
      }}>Clear</Button>

      <Form
        className="items"
        name="form"
        form={form}

      >
        <SearchInput />
        {ccVisible ? <Category /> : null}

        {ccVisible ? <Country /> : null}
        {!categoryChecked && !countryChecked ? <Source /> : null}
      </Form>

    </div>
  )
}
export default BigForm