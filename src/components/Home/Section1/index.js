import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { AwesomeButton } from "react-awesome-button";

import "./index.css";

const Section1 = (_) => {
  return (
    <section className="section-1">
      <div className="title-container">
        <h2>
          Imagine If You Could Have A Consistent, Profitable Robot Developed For
          A Private Group Of Traders That Makes Over 30% A Month Trading In The
          Forex Market With Live Documented Proof?
        </h2>
      </div>
      <div className="section-body">
        <div className="section-wrapper">
          <Container>
            <Row>
              <Col md={8}>
                <p className="text-content">
                  Hi. My name is Mark Larsen and you probably know me already by
                  the hundreds of forex systems reviews I've written and forex
                  videos I've produced during the last 16 years. I have several
                  review sites & blogs such as Forex EA Lab, Forex Tester and
                  Forex Systems Reviews and a free forex trading course called
                  Secrets.bz. I've also been a betatester for nearly all major
                  commercial and free forex trading systems over the last 10
                  years!
                </p>
                <AwesomeButton type="primary">Read more</AwesomeButton>
              </Col>
              <Col md={4}>
                <img
                  src={require("../../../assets/img/super.png")}
                  className="img-card"
                  alt="akowe"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p className="text-content">
                  So trust me... I've seen it all. Let me tell you this. The
                  forex market is the most lucrative market in the world,
                  offering you never ending opportunities. However the ugly
                  truth is 96.5% of the people who start trading fail on forex.
                  And you know what? It's not your fault if you are among this
                  unlucky number. Yes, you heard right. It's not your fault!
                  Those few who succeed know something that keeps ordinary forex
                  traders from achieving success in their trading and these so
                  called guru traders will do whatever it takes to keep this
                  information from you. The truth is - money does not come from
                  nowhere. It simply transfers from people like us to people
                  like them who know something we don't.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Section1;
