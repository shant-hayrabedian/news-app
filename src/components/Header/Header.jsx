import {Link} from "react-router-dom";
import React, {useState} from "react";
import './Header.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Search from "antd/es/input/Search";
import { loadSearchBySelectedQueryParams } from "../../redux/features/headerSearchSlice/actionCreators";

import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from "react-router-dom";
import {endpoints} from '../../api/endpoints'

const Header = () => {
    const history = useHistory()
    const [showInput, setShowInput] = useState(false);

    const click =() => {
        setShowInput(true);
    }

    const dispatch = useDispatch()
    
    const handleOnEnterPress = (event) => {
        if(event.key === 'Enter'){
            dispatch(loadSearchBySelectedQueryParams(event.target.value))
            history.push(`/search?q=${event.target.value}`)
        }
    }
 
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">News</Link></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <SearchOutlined onClick={click} />
                        { showInput ? 
                        
                        <Input className="searchInput"
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