import React from "react";
import "./LandingPage.css"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";


function LandingPage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={5}>
                    <div className="Headline">
                        <h1>Find nemt freelance jobs for studerende</h1>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={10} xl={12}>
                    <div className="searchBar">
                        <InputGroup className="mb-5">
                            <FormControl
                                placeholder="Job title eller søge ord"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Søg</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;
