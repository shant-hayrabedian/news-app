import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Header.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { loadSearchBySelectedQueryParams, toEmptyTheSearchedArray } from "../../redux/features/headerSearchSlice/actionCreators";
import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from "react-router-dom";
import { toEmptyTheSingleSourceArray } from "../../redux/features/singleSourceSlice/actionCreators";

import { resetPage } from '../../redux/features/pageSlice/actionCreators';

import { useQuery } from '../../functions/URLSearchParams'
import { setCategoryIdState, setCountryIdState, setSourceIdState, showCountryAndCategory, toEmptyTheArrayFromFilter } from "../../redux/features/filterSlice/actionCreators";


const Header = () => {
    const history = useHistory()

    const query = useQuery()

    const [showInput, setShowInput] = useState(false);

    const click = () => {
        if (showInput === true) {
            setShowInput(false)
        } else {
            setShowInput(true);
        }
    }

    const dispatch = useDispatch()

    const page = useSelector((state) => state.Page.page)


    let q = query.get("q")
    let sort = query.get('sortBy')


    const handleOnEnterPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(toEmptyTheSingleSourceArray())

            history.push(`/search?q=${event.target.value}`)
            if (q) {

                dispatch(loadSearchBySelectedQueryParams(q, 2, page, sort))

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
        <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
            <div className="logo"
                style={{ marginLeft: 40 }}
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
                    <li style={{ display: 'flex', flexDirection: 'row' }}>
                        <SearchOutlined style={{ marginRight: 20 }} onClick={click} />
                        {showInput ?

                            <Input style={{ marginRight: 40 }}
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