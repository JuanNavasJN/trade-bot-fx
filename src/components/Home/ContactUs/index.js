import React from 'react';
import './index.css';

const ContactUs = _ => {
    return (
        <section className="contact-us" id="contact-us">
            <div>
                <h2>Contact Us</h2>
            </div>
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Message" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
