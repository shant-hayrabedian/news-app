import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import './Header.css';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Header = () => {
    let history = useHistory();
    const query = useQuery()

    const q = query.get("q")
    console.log(q);
    const [showInput, setShowInput] = useState(false);
    const click = () => {
        setShowInput(true);
    }
    const onSearch = (event) => {
        // event.target.value = q
        console.log(event.target.value);
    }


    return (
        <header>
            <div className="logo">
                <h1><Link to="/">News</Link></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <SearchOutlined onClick={click}/>
                        {showInput ? <Input onChange={onSearch} className="searchInput" placeholder="Search Here..." onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                // <Link to ={`/search?sources=${event.target.value}`} />
                                history.push(`/search?q=${event.target.value}`);
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