import React from "react";
import {Card} from "react-bootstrap";

const JobCard = (props) => {
    return (
            <Card>
                <Card.Img variant="top"
                             src={props.url}/>
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Opdateret for 3 min siden</small>
                </Card.Footer>
            </Card>
    )
};

export default JobCard;
