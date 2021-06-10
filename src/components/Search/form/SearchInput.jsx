import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '../../../functions/URLSearchParams';
import { loadDatabyCheckboxes } from '../../../redux/features/filterSlice/actionCreators';
import { resetPage } from '../../../redux/features/pageSlice/actionCreators';


import { Form, Radio, Row, Col, Button } from 'antd';
import { useHistory } from 'react-router';


const SearchInput = () => {
    const page = useSelector((state) => state.Page.page)
    
    const query = useQuery()
    const dispatch = useDispatch()
    const history = useHistory()
    const source = query.get('source')
    const countryCodeFromQuery = query.get('country')
    const categoryFromQuery = query.get('category')

    const countryChecked = useSelector(state => state.Filter.checked.countryChecked)
    const categoryChecked = useSelector(state => state.Filter.checked.categoryChecked)

    const handleOnEnterPress = (event) => {
       const val  = event.target.value 
        if (event.key === 'Enter') {
              
        if (countryCodeFromQuery) {
            history.push(`/search?qFromCheckbox=${val}${countryChecked ? '&country=' + countryCodeFromQuery : ''}${categoryChecked ? '&category=' + categoryFromQuery  : ''}`)
         }else if (categoryFromQuery) {
            history.push(`/search?qFromCheckbox=${val}${categoryChecked ? '&category=' +categoryFromQuery : ''}${countryChecked ? '&country=' + countryCodeFromQuery  : ''}`)
         }else if(source) {
             history.push(`/search?source=${source}${val ? '&qFromCheckbox=' + val : ''}`)
         }else if(val === ''){
            history.push(`/search`)
         }
         else{
             history.push(`/search?qFromCheckbox=${val}`)
         }
         if (page !== 1) {
                dispatch(resetPage(1))
            }
        }

    }

    return (
        <div>
            <Form.Item
            name="search"
            rules={[{required: true, message: 'you need to write something here'}]}
            >
                <Input placeholder="Search..."
                    onKeyPress={handleOnEnterPress} />
            </Form.Item>
        </div>
    )
}
export default SearchInput