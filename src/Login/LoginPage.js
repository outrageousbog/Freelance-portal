import React from "react";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        }
    }

    render() {
        return (
            <div>
                <h1>Login page!</h1>
            </div>
        )
    }
}

export default LoginPage;
