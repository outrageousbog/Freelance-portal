import React from "react";
import './DetailedJobPage.css';
import Container from "react-bootstrap/Container";

function DetailedJobPage() {
    return (
        <div>
            <Container className="summary-Job-Description">
                <div className="container">
                    <h2>Summary job description (Job title)</h2>

                    <div>
                        <span className="badge badge-primary">First tag</span>
                        <span className="badge badge-primary">Second tag</span>
                        <span className="badge badge-primary">Third tag</span>
                        <span className="badge badge-secondary">Fourth tag</span>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <p>Vi har brug for en frisk person der vil få ansvaret for reaktivering tidligere
                                        kunder. Vi har rigtig gode realtioner og et godt renome hos dem og vi kan
                                        garanteret nyde godt af at de får lidt fornyet opmærksomhed.</p>
                                    <br></br>

                                    Dine opgaver vil være at:
                                    <ul>
                                        <li>Reaktivere eksisterende kunder hos os (IT-forhandlere) som tidligere har
                                            handlet, men er stoppet
                                        </li>
                                        <li>Få eksisterende mindre kunder til at handler oftere og/ eller mere hos os.
                                        </li>
                                        <li>Produkterne er computere og printere</li>
                                        <li>Personen skal være serviceminded, venlig og energisk</li>
                                        <li>Det er ikke et krav at vedkommende har detaljeret produktviden, men skal
                                            vide hvad en computer og printer består af overordnet
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <div className="aboutJobRightCard">
                                        <h5 className="card-title">Pr. time</h5>
                                        <p className="card-text">DKK 400 - 700.</p>
                                    </div>
                                    <div className="aboutJobRightCard">
                                        <h5 className="card-title">Job start</h5>
                                        <p className="card-text">Snarest muligt</p>
                                    </div>
                                    <div className="aboutJobRightCard">
                                        <h5 className="card-title">Arbejdssted</h5>
                                        <p className="card-text"><p>Region: Storkøbenhavn</p><p
                                            className="text-muted">1456 København K</p></p>
                                    </div>
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
                                    <table className="table table-borderless">
                                        <tbody>
                                        <tr>
                                            <th scope="row">Job start og slut</th>
                                            <td>Starter: Snarest muligt
                                                <br></br>Stopper: 30. sep 2021
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Omfang</th>
                                            <td>Konsulentopgave på fuld tid</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Erfaringsniveau</th>
                                            <td>Junior<br></br>Senior</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Antal freelancere</th>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Afregning</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Opslagets friskhed</th>
                                            <td>Spritny</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Forventet svartid</th>
                                            <td>Vi svarer løbende<br></br>
                                                <p className="text-muted">Virksomhedens seneste besked sendt 1 uge
                                                    siden</p></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Company name</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Company address</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
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
