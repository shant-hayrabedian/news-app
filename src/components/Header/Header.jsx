import {Link} from "react-router-dom";
import React, {useState} from "react";
import './Header.css';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import Search from "antd/es/input/Search";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const [showInput, setShowInput] = useState(false);
    const click = () => {
        setShowInput(true);
    }
    const onSearch = value => console.log(value);


    return (
        <header>
            <div className="logo">
                <h1><Link to="/">News</Link></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <SearchOutlined onClick={click}/>
                        {showInput ? <Input className="searchInput" placeholder="Search Here..." onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                history.push('/search');
                            }
                        }}
                        /> : null}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;