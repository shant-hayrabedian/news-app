import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import './Header.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Search from "antd/es/input/Search";
import { loadSearchBySelectedQueryParams, toEmptyTheSearchedArray } from "../../redux/features/headerSearchSlice/actionCreators";
// import {emptyTheSingleSource} from '../../redux/features/singleSourceSlice/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

import { useHistory, useLocation } from "react-router-dom";
import {endpoints} from '../../api/endpoints'
import { toEmptyTheSingleSourceArray } from "../../redux/features/singleSourceSlice/actionCreators";

import { resetPage, updatePageSize } from '../../redux/features/pageSlice/actionCreators';

// import { toEmptyTheSource } from '../../redux/features/sourcesSlice/actionCreators';
import {useQuery} from '../../functions/URLSearchParams'


const Header = () => {
    const history = useHistory()

    const query = useQuery()

    const [showInput, setShowInput] = useState(false);

    const click =() => {
        setShowInput(true);
    }

    const dispatch = useDispatch()
    
    const page = useSelector((state)=> state.Page.page)

    // const sources = query.get("sources")
    // console.log("sources", sources)
    let q = query.get("q")
    let sort = query.get('sortBy')
    // let page = query.get("page")
    // console.log("page", page)
    // let pageSize = query.get("pageSize")
    // console.log("pagesize", pageSize)

    const handleOnEnterPress = (event) => {
        if(event.key === 'Enter'){
            dispatch(toEmptyTheSingleSourceArray())
            // dispatch(toEmptyTheSingleSourceArray())
            // dispatch(toEmptyTheSource())
            history.push(`/search?q=${event.target.value}`)
            if(q){
                dispatch(loadSearchBySelectedQueryParams(q, 5, page, sort))
            }

            dispatch(toEmptyTheSearchedArray())

            if(page !== 1){
                dispatch(resetPage(1))
            }
        }

    }
   
    


    return (
        <header>
            <div className="logo">
                <h1 onClick={()=> {
                    dispatch(resetPage(1))
                    dispatch(toEmptyTheSingleSourceArray())
                }}><Link to="/">News</Link></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <SearchOutlined onClick={click} />
                        { showInput ? 
                        
                        <Input className="searchInput"
                                type="text"
                                     placeholder="Search Here..."
                                     onKeyPress={handleOnEnterPress}
                                     /> : null }
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;