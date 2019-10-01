import React from "react";
import './DetailedJobPage.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function DetailedJobPage() {
    return(
        <div>
            <Container className="summary-Job-Description">
                <div className="container">
                    <h2>Summary job description</h2>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

            <Container className="detailed-Job-Description">
                <div className="container">
                    <h2>Detailed job description</h2>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default DetailedJobPage;
