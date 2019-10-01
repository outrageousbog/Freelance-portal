import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MarketPage from "./MarketPage/MarketPage";
import LoginPage from "./Login/LoginPage";
import PageNotFound from "./InvalidPage/PageNotFound";
import NavBar from "./Shared/NavBar"
import Footer from "./Shared/Footer";


function App() {
    return (
        <div className="App">
            <div className="site-content">
                <React.Fragment>
                    <NavBar/>
                </React.Fragment>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route path={"/market"} component={MarketPage}/>
                            <Route path={"/login"} component={LoginPage}/>
                            <Route exact path={"/"} component={LandingPage}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
            <React.Fragment>
                <Footer/>
            </React.Fragment>
        </div>
    );
}

export default App;
