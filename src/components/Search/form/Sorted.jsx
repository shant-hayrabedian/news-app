import './Sorted.css'
import { useRef, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "../../../functions/URLSearchParams"
import { loadSearchBySelectedQueryParams, reverseArrFromSearch, sortingSearchedFromNewest, sortingSearchedFromOldest, toEmptyTheSearchedArray } from '../../../redux/features/headerSearchSlice/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesBySelectedSource, reverseArrFromSource, sortingFromNewest, sortingFromOldest, sortingSourcesFromNewest, sortingSourcesFromOldest, toEmptyTheSingleSourceArray } from '../../../redux/features/singleSourceSlice/actionCreators';

import { Select } from 'antd'
import { changeOrder } from '../../../redux/features/pageSlice/actionCreators';
import { sortingFilteredArticlesFromNewest, sortingFilteredArticlesFromOldest, toEmptyTheArrayFromFilter } from '../../../redux/features/filterSlice/actionCreators';

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
    // const arrBySource = useSelector(state => state.FetchedArticlesBySource.articles)
    // const arrBySearch = useSelector(state => state.FetchedArticlesFromSearch.fromEvent)

    // const handleSortingOnChange = (value) => {

    // history.push(`/search?${q ? "q" : "sources"}=${q ? q : sources}&sortBy=${value}`)
    // if (q) {
    // dispatch(toEmptyTheSearchedArray())

    //     dispatch(loadSearchBySelectedQueryParams(q, arrBySearch.length, page, value))
    //  }
    //  if (sources) {
    // dispatch(toEmptyTheSingleSourceArray())
    // dispatch(reverseArr())

    //     dispatch(loadArticlesBySelectedSource(sources, arrBySource.length, page, value))
    //  }
    //  }
    const articlesFromSource = useSelector((state) => state.FetchedArticlesBySource.articles) || []
    const sortOrder = useSelector(state => state.Page.order)
    const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent) || []
    const articlesFromFilter = useSelector((state) => state.Filter.articlesFromFilter) || []


    const magicFunction = (e, ...args) => {

        if (e === "latest") {
            [...args].forEach((item) => {
                if (item === articlesFromSource) {
                    dispatch(sortingSourcesFromNewest(item))
                } else if (item === articlesFromSearch) {
                    dispatch(sortingSearchedFromNewest(item))
                }

            })
        } else {
            [...args].forEach((item) => {
                if (item === articlesFromSource) {
                    dispatch(sortingSourcesFromOldest(item))
                }
                else if (item === articlesFromSearch) {
                    dispatch(sortingSearchedFromOldest(item))
                }
            })

        }

    }
    

    const magicFunctionforFiltering = (e, articlesState) => {
        dispatch(toEmptyTheArrayFromFilter())

        if (e === "latest") {
        
            dispatch(sortingFilteredArticlesFromNewest(articlesState.sort((a, b) => {
                if (Date.parse(a.publishedAt) / 1000 < Date.parse(b.publishedAt) / 1000) {
                    return 1
                } else {
                    return -1
                }
            })))
        } else {
            dispatch(sortingFilteredArticlesFromOldest(articlesState.sort((a, b) => {
                if (Date.parse(a.publishedAt) / 1000 > Date.parse(b.publishedAt) / 1000) {
                    return 1
                } else {
                    return -1
                }
            })))
        }
    }

    const sortingRenderedArrayOnChange = (e) => {
        if (e === 'oldest') {
            dispatch(changeOrder('oldest'))
        } else {
            dispatch(changeOrder('latest'))
        }
    }


    const options = [{
        value: 'latest',
        id: 1
    }, {
        value: 'oldest',
        id: 2
    }]
    return (

        <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
            <label style={{ fontSize: 20 }} className="label2" htmlFor="sort2">Sorted by:</label>
            <Select
                onDropdownVisibleChange={() => setDropDownOnLabelClick(false)}
                onClick={(e) => {
                    !dropDownOnLabelClick ? setDropDownOnLabelClick(true) : setDropDownOnLabelClick(false);

                }}
                className='select2'
                id="sort2"
                defaultValue="latest"
                style={{ width: 170, textAlign: 'left', fontSize: 18 }}
                bordered={false}
                open={dropDownOnLabelClick}
                onChange={(e) => {
                    sortingRenderedArrayOnChange(e)
                    magicFunction(e, articlesFromSource, articlesFromSearch)
                    magicFunctionforFiltering(e, articlesFromFilter)
                }}
                showArrow={false}
            >
                {options.map((option) => <Option className="option" key={option.id} value={option.value}>
                    {option.value[0].toUpperCase() + option.value.slice(1)}
                </Option>
                )}

            </Select>
        </div>

    )
}

export default Sorted

