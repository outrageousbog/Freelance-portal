import React from "react";
import "./MarketPage.css"
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function MarketPage() {
    return (
        <div>
            <Container>

                <Row>
                    <Col sm={12} md={10} xl={12} className="search" class="mx-auto">

                        <InputGroup className="mb-5">
                            <FormControl
                                placeholder="Job titel eller søge ord"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary">Søg</Button>
                            </InputGroup.Append>
                        </InputGroup>

                    </Col>
                </Row>

                <Row sm={12} md={10} xl={12} class="mx-auto">
                    <Col>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://cdn.swcdn.net/creative/images/dnsStuff/29072016/computer_screen.jpg"/>
                                <Card.Body>
                                    <Card.Title>Søger IT-Studerende</Card.Title>
                                    <Card.Text>
                                        Har du lyst til nye udfordringer ? Klik ind og læs mere om danmarks bedste
                                        studiejob.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Opdateret for 3 min siden</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://cdn.swcdn.net/creative/images/dnsStuff/29072016/computer_screen.jpg"/>
                                <Card.Body>
                                    <Card.Title>Søger IT-Studerende</Card.Title>
                                    <Card.Text>
                                        Har du lyst til nye udfordringer ? Klik ind og læs mere om danmarks bedste
                                        studiejob.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Opdateret for 3 min siden</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://cdn.swcdn.net/creative/images/dnsStuff/29072016/computer_screen.jpg"/>
                                <Card.Body>
                                    <Card.Title>Søger IT-Studerende</Card.Title>
                                    <Card.Text>
                                        Har du lyst til nye udfordringer ? Klik ind og læs mere om danmarks bedste
                                        studiejob.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Opdateret for 3 min siden</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>


            </Container>
        </div>

    )
}

export default MarketPage;
