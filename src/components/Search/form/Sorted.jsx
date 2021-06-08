import './Sorted.css'
import { useRef, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "../../../functions/URLSearchParams"
import { loadSearchBySelectedQueryParams, toEmptyTheSearchedArray } from '../../../redux/features/headerSearchSlice/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesBySelectedSource, toEmptyTheSingleSourceArray } from '../../../redux/features/singleSourceSlice/actionCreators';

import { Select } from 'antd'

const { Option } = Select;

const Sorted = () => {


    const [dropDownOnLabelClick, setDropDownOnLabelClick] = useState(false)

    const history = useHistory()
    const query = useQuery()
    const dispatch = useDispatch()

    const page = useSelector(state => state.Page.page)

    const q = query.get('q')
    const sources = query.get('sources')



    // const today =  new Date().toISOString().split('T')[0];
    // const fullDate = new Date().toISOString()
    const arrBySource = useSelector(state => state.FetchedArticlesBySource.articles)
    const arrBySearch = useSelector(state => state.FetchedArticlesFromSearch.fromEvent)

    const handleSortingOnChange = (value) => {
        history.push(`/search?${q ? "q" : "sources"}=${q ? q : sources}&sortBy=${value}`)
        if (q) {
            dispatch(toEmptyTheSearchedArray())
            dispatch(loadSearchBySelectedQueryParams(q, arrBySearch.length, page, value))
        }
        if (sources) {
            dispatch(toEmptyTheSingleSourceArray())
            dispatch(loadArticlesBySelectedSource(sources, arrBySource.length, page, value))
        }
    }


    const options = [{
        value: 'popularity',
        id: 1
    }, {
        value: 'relevancy',
        id: 2
    }, {
        value: 'publishedAt',
        id: 3
    }]


    return (
        
            <div style={{textAlign: 'right', fontWeight: 'bold' }}>
                <label style={{fontSize: 20}} className="label2" htmlFor="sort2">Sorted by:</label>
                <Select
                    onDropdownVisibleChange={() => setDropDownOnLabelClick(false)}
                    onClick={() => !dropDownOnLabelClick ? setDropDownOnLabelClick(true) : setDropDownOnLabelClick(false)}
                    className='select2'
                    id="sort2"
                    defaultValue="popularity"
                    style={{ width: 170, textAlign: 'left', fontSize: 18 }}
                    bordered={false}
                    open={dropDownOnLabelClick}
                    onChange={handleSortingOnChange}
                    showArrow={false}
                >
                {options.map((option) => <Option className="option" key={option.id} value={option.value}>
                    {option.value === 'publishedAt' ? 'Published date' : option.value[0].toUpperCase() + option.value.slice(1)}
                    </Option>
                )}

                </Select>
            </div>

    )
}

export default Sorted

