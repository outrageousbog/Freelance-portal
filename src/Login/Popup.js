import React from "react";

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signIn: true,
        }
    }

    togglePopup() {
        this.setState({
            signIn: !this.state.signIn
        })
    }

    render() {
        return(
            <div>
                <h1>Flot tekst</h1>
            </div>
        )
    }
}

export default Popup;
