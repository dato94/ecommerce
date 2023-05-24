import React, {useState, useEffect} from "react";


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col  } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";


import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {


    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])

    const year = new Date().getFullYear()

    useEffect(() => {
        const filteredTrendingProducts = products.filter((item) => item.category === "chair");

        const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");

        
        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
    }, []);

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

        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts} />
                </Row>
            </Container>
        </section>

        <section className="best__sales">
            <Container>
            <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Best Sales</h2>
                    </Col>

                    <ProductsList data={bestSalesProducts} />
                </Row>
            </Container>
        </section>

    </Helmet>
}

export default Home;