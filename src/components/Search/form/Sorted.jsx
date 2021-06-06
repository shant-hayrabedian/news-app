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


    const [state, setstate] = useState(false)



    const history = useHistory()
    const query = useQuery()
    const dispatch = useDispatch()
    const page = useSelector(state => state.Page.page)

    const q = query.get('q')
    const sources = query.get('sources')

    const f = useLocation()
    console.log('useloc', f)

    // const today =  new Date().toISOString().split('T')[0];
    // const fullDate = new Date().toISOString()
    const arrBySource = useSelector(state => state.FetchedArticlesBySource.articles)
    const arrBySearch = useSelector(state => state.FetchedArticlesFromSearch.fromEvent)

    const handleOnClick = (value) => {
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
        <>
            <div>
                <label className="label2" htmlFor="sort2"> sorted by: </label>
                <Select
                    onDropdownVisibleChange={() => setstate(false)}
                    onClick={() => !state ? setstate(true) : setstate(false)}
                    className='select2'
                    id="sort2"
                    defaultValue="popularity"
                    style={{ width: 120, textAlign: 'left' }}
                    bordered={false}
                    open={state}
                    onChange={handleOnClick}
                    showArrow={false}
                >
                    {options.map((option) => <Option className="option" key={option.id} value={option.value}>
                        {option.value === 'publishedAt' ? 'Published date' : option.value[0].toUpperCase() + option.value.slice(1)}
                    </Option>
                    )}

                </Select>
            </div>

            {/* <div style={{fontWeight: 'bold' }}>
            <form className='formselect'>
            
            <label className="label" htmlFor="sort" > Sorted By: 

                <select  onChange={handleOnClick} className="select" id="sort" name="sort" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                
                    {options.map((option) => <option className="option" key={option.id} value={option.value}>
                        {     option.value === 'publishedAt' ? 'Published date' : option.value[0].toUpperCase() + option.value.slice(1)}
                    </option>
                    )}


                </select>

                </label>
            </form>
        </div> */}
        </>
    )
}

export default Sorted

