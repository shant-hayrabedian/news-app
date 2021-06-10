import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '../../../functions/URLSearchParams';
import { loadDatabyCheckboxes } from '../../../redux/features/filterSlice/actionCreators';
import { resetPage } from '../../../redux/features/pageSlice/actionCreators';


import { Form, Radio, Row, Col, Button } from 'antd';


const SearchInput = () => {
    const page = useSelector((state) => state.Page.page)

    const query = useQuery()
    const dispatch = useDispatch()

    const source = query.get('source')

    const handleOnEnterPress = (event) => {
        if (event.key === 'Enter') {
            // dispatch(toEmptyTheSingleSourceArray())
            // dispatch(toEmptyTheSingleSourceArray())
            // dispatch(toEmptyTheSource())
            // dispatch(loadDatabyCheckboxes(source, null, null, null, 1, page))
            //!! history.push(`/search?q=${event.target.value}`)

            // if(q){
            // dispatch(loadSearchBySelectedQueryParams(q, 5, page, sort))
            // }

            // dispatch(toEmptyTheSearchedArray())

            if (page !== 1) {
                dispatch(resetPage(1))
            }
        }

    }

    return (
        <div>
            <Form.Item
            name="search"
            // rules={[{required: true, message: 'input smt'}]}
            >
                <Input placeholder="Search..."
                    onKeyPress={handleOnEnterPress} />
            </Form.Item>
        </div>
    )
}
export default SearchInput