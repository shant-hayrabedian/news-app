import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
// import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
// import {css} from "@emotion/react";
import React, {useState, useEffect} from "react";
import FadeLoader from "react-spinners/FadeLoader";

// const loaderCSS = css `
// margin-top: 25px;
// margin-bottom: 25px;
// `

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <div className="App">
            {
                loading ?
                <FadeLoader 
                color={"#B9ECF0"} 
                loading={loading} 
                size={40}
                radius={2}
                margin={2}
                height={15}
                width={5}
                />
                :
        <Router>
                <div className="App">
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/search" component={Search} /> 
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                    {/* <div className="App">
                        <BounceLoader css={loaderCSS} size={24} color="green" loading />
                        <BarLoader css={loaderCSS} size={48} color="blue" loading/>
                        <BeatLoader css={loaderCSS} size={72} color="green" loading/>
                    </div> */}
                </div>
        </Router>
    }
    </div>
    );
}

export default App;
