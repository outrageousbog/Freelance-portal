import React from "react";
import Card from "react-bootstrap/Card";
import "./Footer.css"


class Footer extends React.Component {
    render() {
        return (
            <div className="app-footer">
                <Card.Footer fixed="bottom">
                    <h3>DETTE ER EN FOOTER</h3>
                </Card.Footer>
            </div>
        )
    }
}

export default Footer;