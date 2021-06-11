import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './Header.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Search from "antd/es/input/Search";
import { loadSearchBySelectedQueryParams, sortingSearchedFromNewest, sortingSearchedFromOldest, toEmptyTheSearchedArray } from "../../redux/features/headerSearchSlice/actionCreators";
// import {emptyTheSingleSource} from '../../redux/features/singleSourceSlice/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

import { useHistory, useLocation } from "react-router-dom";
import { endpoints } from '../../api/endpoints'
import { sortingSourcesFromNewest, sortingSourcesFromOldest, toEmptyTheSingleSourceArray } from "../../redux/features/singleSourceSlice/actionCreators";

import { resetPage, updatePageSize } from '../../redux/features/pageSlice/actionCreators';

import { useQuery } from '../../functions/URLSearchParams'
import { setCategoryIdState, setCountryIdState, setSourceIdState, showCountryAndCategory, toEmptyTheArrayFromFilter } from "../../redux/features/filterSlice/actionCreators";


const Header = () => {
    const history = useHistory()

    const query = useQuery()

    const [showInput, setShowInput] = useState(false);

    const click = () => {
        if(showInput === true){
            setShowInput(false)
        }else{
            setShowInput(true);
        }
    }

    const dispatch = useDispatch()

    const page = useSelector((state) => state.Page.page)
    const sortOrder = useSelector((state) => state.Page.order)
    const articlesFromSearch = useSelector((state) => state.FetchedArticlesFromSearch.fromEvent) || []
    // console.log(sortOrder)
    // console.log(articlesFromSearch)
    // const sources = query.get("sources")
    // console.log("sources", sources)
    let q = query.get("q")
    let sort = query.get('sortBy')
    // let page = query.get("page")
    // console.log("page", page)
    // let pageSize = query.get("pageSize")
    // console.log("pagesize", pageSize)

    const handleOnEnterPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(toEmptyTheSingleSourceArray())
            // dispatch(toEmptyTheSingleSourceArray())
            // dispatch(toEmptyTheSource())
            history.push(`/search?q=${event.target.value}`)
            ///!! petq a hanel
            if (q) {
                if (sortOrder === "latest") {
                    dispatch(toEmptyTheSearchedArray())
                    dispatch(loadSearchBySelectedQueryParams(q, 2, page, sort))
                    dispatch(sortingSearchedFromNewest(articlesFromSearch))
                } else {
                    dispatch(toEmptyTheSearchedArray())
                    dispatch(sortingSearchedFromOldest(articlesFromSearch))
                }
            }

            dispatch(toEmptyTheSearchedArray())
            dispatch(toEmptyTheArrayFromFilter())
            dispatch(showCountryAndCategory())

            if (page !== 1) {
                dispatch(resetPage(1))
            }
        }

    }



    
    return (
        <header style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
            <div className="logo"
                style={{marginLeft: 40}}
            >
                <h1 onClick={() => {
                    dispatch(setCategoryIdState(''))
                    dispatch(setCountryIdState(''))
                    dispatch(setSourceIdState(''))
                    dispatch(resetPage(1))
                    dispatch(toEmptyTheSingleSourceArray())
                    dispatch(toEmptyTheSearchedArray())
                    dispatch(toEmptyTheArrayFromFilter())
                }}><Link to="/">News</Link></h1>
            </div>
            <nav>
                <ul>
                    <li style={{display: 'flex', flexDirection: 'row'}}>
                        <SearchOutlined  style={{marginRight: 20}} onClick={click} />
                        {showInput ?

                            <Input style={{marginRight:40}}
                                type="text"
                                placeholder="Search Here..."
                                onKeyPress={handleOnEnterPress}
                            /> : null}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;