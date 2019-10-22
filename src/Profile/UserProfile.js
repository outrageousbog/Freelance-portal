import React from 'react'
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./UserProfile.css";
import Card from "react-bootstrap/Card";

function UserProfile() {
    return (
        <Container>
            <Row sm={12} md={12} xl={12}>
                <Col xl={3}>
                    <h4>Profile</h4>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    Her skal brugernavn og billede af brugeren være, det bliver rigtig flot
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default UserProfile;