import React from "react";


import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col  } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";

import Services from "../services/Services";

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

                            <motion.button whileTap={{scale: 1.2}} className="buy__btn">
                                <Link to='/shop'>SHOP NOW</Link>
                            </motion.button>
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

        <Services />
    </Helmet>
}

export default Home;