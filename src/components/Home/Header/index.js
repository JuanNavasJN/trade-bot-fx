import React from 'react';

import './index.css';

const Header = _ => {
    return (
        <header>
            <div>
                <h1>Pandapips</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    at deleniti! Quidem odit, ullam officia tenetur ipsa, dolor
                    ipsum ut corporis nulla veniam dolorum, itaque aperiam
                    dolore molestiae officiis quam!
                </p>
            </div>
            <div>
                <iframe
                    // width="560"
                    // height="315"
                    src="https://www.youtube.com/embed/nmgKKSw5Wwo"
                    frameborder="0"
                    title="video"
                    // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    // allowfullscreen
                ></iframe>
            </div>
        </header>
    );
};

export default Header;
