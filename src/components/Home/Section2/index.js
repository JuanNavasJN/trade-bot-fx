import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Container, Row, Col } from "react-grid-system";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import "./index.css";

const Section1 = (_) => {
  return (
    <section className="section-2">
      <div className="title-container">
        <h2>SECURE YOUR COPY of PandaPips NOW</h2>
      </div>
      <div className="section-body">
        <div className="section-wrapper">
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal"
            className="card"
          >
            <FrontSide>
              <img
                src={require("../../../assets/img/super.png")}
                className="img-card"
                alt="akowe"
              />
              <h2 className="title-card">Basic</h2>
              <p className="text-card">85$/month</p>
            </FrontSide>
            <BackSide>
              <Container>
                <Row>
                  <Col md={12}>
                    <p className="text-card-back">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse excepturi commodi sed perspiciatis, voluptatum
                      doloribus porro odio eos recusandae animi? Aliquam
                      obcaecati tempora enim ipsa repellendus magni nulla nihil
                      architecto?
                    </p>
                    <AwesomeButton type="primary">Button</AwesomeButton>
                  </Col>
                </Row>
              </Container>
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal"
            className="card"
          >
            <FrontSide>
              <img
                src={require("../../../assets/img/super.png")}
                className="img-card"
                alt="akowe"
              />
              <h2 className="title-card">PROFESSIONAL</h2>
              <p className="text-card">150$/month</p>
            </FrontSide>
            <BackSide>
              <Container>
                <Row>
                  <Col md={12}>
                    <p className="text-card-back">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse excepturi commodi sed perspiciatis, voluptatum
                      doloribus porro odio eos recusandae animi? Aliquam
                      obcaecati tempora enim ipsa repellendus magni nulla nihil
                      architecto?
                    </p>
                    <AwesomeButton type="primary">Button</AwesomeButton>
                  </Col>
                </Row>
              </Container>
            </BackSide>
          </Flippy>
          {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse excepturi commodi sed perspiciatis, voluptatum
                        doloribus porro odio eos recusandae animi? Aliquam
                        obcaecati tempora enim ipsa repellendus magni nulla
                        nihil architecto?
                    </p> */}
        </div>
      </div>
    </section>
  );
};

export default Section1;
