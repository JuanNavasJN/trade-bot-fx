import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./index.css";
import pr1 from "../../../assets/img/p1.jpg";
import pr2 from "../../../assets/img/p2.jpeg";
import pr3 from "../../../assets/img/p3.jpeg";

const Section1 = (_) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <section className="section-3">
      <div className="title-container">
        <h2>See what other people are saying about GPS FOREX ROBOT</h2>
      </div>
      <div className="section-body">
        <div className="section-wrapper">
          <Swiper {...params}>
            <div>
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                excepturi commodi sed perspiciatis, voluptatum doloribus porro
                odio eos recusandae animi? Aliquam obcaecati tempora enim ipsa
                repellendus magni nulla nihil architecto?
              </p>
            </div>
            <div>
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                excepturi commodi sed perspiciatis, voluptatum doloribus porro
                odio eos recusandae animi? Aliquam obcaecati tempora enim ipsa
                repellendus magni nulla nihil architecto?
              </p>
            </div>
            <div>
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                excepturi commodi sed perspiciatis, voluptatum doloribus porro
                odio eos recusandae animi? Aliquam obcaecati tempora enim ipsa
                repellendus magni nulla nihil architecto?
              </p>
            </div>
          </Swiper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            excepturi commodi sed perspiciatis, voluptatum doloribus porro odio
            eos recusandae animi? Aliquam obcaecati tempora enim ipsa
            repellendus magni nulla nihil architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            excepturi commodi sed perspiciatis, voluptatum doloribus porro odio
            eos recusandae animi? Aliquam obcaecati tempora enim ipsa
            repellendus magni nulla nihil architecto?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
