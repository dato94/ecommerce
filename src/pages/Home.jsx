import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col  } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";

const Home = () => {

    const year = new Date().getFullYear()
    return <Helmet title={"home"} >
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending product in {year}</p>
                            <h2>Make Your Interior Minimalistic 6 Modern</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia quaerat, illo distinctio possimus inventore autem perferendis fugit officiis. Quidem!</p>

                            <button className="buy__btn">
                                SHOP NOW
                            </button>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="heroImg" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Home;