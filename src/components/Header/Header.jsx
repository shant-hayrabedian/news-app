import {Link} from "react-router-dom";
import React from "react";
import './Header.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Header = () => {
    // function _handleInputClick(event) {
    //     if (event.target.tagName === 'INPUT') {
    //         this.setState({open: 'calendar'});
    //     }
    // }
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">News</Link></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        {/*<Link to="/search">*/}
                    <SearchOutlined onClick={(event) => {
                        // if (event.target.tagName === 'INPUT') {
                        //     <Input placeholder="Basic usage" />
                        // }
                    }} />
                    {/*</Link>*/}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;