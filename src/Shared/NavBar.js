import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return(
            <div className="navbar bg-light">
                <div className="navbar-brand">Freelancer</div>
                <div className="nav mr-auto">
                    <div className="nav-link" >Home</div>
                    <div className="nav-link">Features</div>
                    <div className="nav-link" >Pricing</div>
                </div>
            </div>
        )
    }
}

export default NavBar;
