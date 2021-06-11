import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
    return (
        
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
                </div>
        </Router>

    );
}

export default App;
