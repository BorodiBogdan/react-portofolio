import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile-cut.jpg";

export function Banner() {
    return (
        <section id="home" className="banner">
            <Container>
                <Row>
                    <Col className="col">
                        <h1>Hi, I'm Borodi Bogdan!</h1>
                        <p>Greetings! My name is <strong>Borodi Bogdan
                        </strong>, but my closest friends call me <strong>Bob
                            </strong>. I am a 19-year-old  student from <strong>Bistrita, Romania
                            </strong> - probably one of the smallest towns on earth - pursuing a <strong>
                                Bachelor's Degree in Computer Science
                            </strong> at <strong>Babeș-Bolyai University from Cluj Napoca</strong>.</p>
                        <button onClick={() => console.log("Clicked")}><span className="tagline">Welcome to my portofolio</span></button>
                    </Col>
                    <Col className="col">
                        <img className="" src={headerImg} alt="Header Image"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}