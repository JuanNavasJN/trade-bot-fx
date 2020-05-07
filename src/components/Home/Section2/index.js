import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
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
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal"
            className="card"
          >
            <FrontSide>RICK</FrontSide>
            <BackSide>ROCKS</BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal"
            className="card"
          >
            <FrontSide>RICK</FrontSide>
            <BackSide>ROCKS</BackSide>
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
