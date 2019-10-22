import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MarketPage from "./MarketPage/MarketPage";
import LoginPage from "./Login/LoginPage";
import PageNotFound from "./InvalidPage/PageNotFound";
import NavBar from "./Shared/NavBar"
import DetailedJobPage from "./DetailedJobPage/DetailedJobPage";
import UserProfile from "./Profile/UserProfile";


function App() {
  return (
    <div className="App">
        <React.Fragment>
            <NavBar/>
        </React.Fragment>
      <HashRouter>
          <div>
              <Switch>
                  <Route path={"/market"} component={MarketPage}/>
                  <Route path={"/login"} component={LoginPage}/>
                  <Route path={"/detailedjob"} component={DetailedJobPage}/>
                  <Route path={"/profile"} component={UserProfile} />
                  <Route exact path={"/"} component={LandingPage}/>
                  <Route component={PageNotFound}/>
              </Switch>
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
