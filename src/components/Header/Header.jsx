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

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const Header = () => {
    const history = useHistory()

    // const query = useQuery()

    const [showInput, setShowInput] = useState(false);

    const click =() => {
        setShowInput(true);
    }

    const dispatch = useDispatch()
    // const initialPageState = useSelector((state)=> state.Page.page)


    // const sources = query.get("sources")
    // console.log("sources", sources)
    // const q = query.get("q")

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
            // dispatch(toEmptyTheArray())
            // dispatch(resetPage(1))
        }
    }
   
    


    return (
        <header>
            <div className="logo">
                <h1><Link to="/">News</Link></h1>
            </div>
            <nav>
                <SearchOutlined onClick={click} />
                <div className="searchInput">
                            { showInput ?
                                <Input type="text"
                                       placeholder="Search Here..."
                                       onKeyPress={handleOnEnterPress}
                                /> : null }
                </div>

            </nav>
        </header>
    );
}

export default Header;