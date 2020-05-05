import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { scroller } from 'react-scroll';

const styleTop = {
    padding: '1.5% 6%',
};

const styleDown = {
    padding: '1% 6%',
    // backgroundColor: '#0e377f',
    backgroundColor: '#020305',
    boxShadow: '2px 6px 44px -8px rgba(0, 0, 0, 0.75)',
};

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            styles: { padding: '1.5% 6%' },
            styleButton: { display: 'none' },
        };
    }
    componentDidMount = () => {
        console.log('object');
        this.scrollDown();
    };
    scrollDown = () => {
        window.document.onscroll = () => {
            let vertical = window.scrollY;

            if (vertical > 63) {
                this.setState({
                    styles: styleDown,
                    styleButton: { display: 'block' },
                });
            }
            if (vertical === 0) {
                this.setState({
                    styles: styleTop,
                    styleButton: { display: 'none' },
                });
            }
        };
    };
    scrollTo = id => {
        scroller.scrollTo(id, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    scroll = id => {
        window.scroll({
            top: document.getElementById(id).offsetTop - 40,
            behavior: 'smooth',
        });
    };

    handleClick = id => this.scrollTo(id);

    render() {
        const { styles } = this.state;

        return (
            <nav className="navbar" style={styles}>
                <div className="logo">
                    <Link to="/">
                        {/* <img
                            src={require('../../assets/img/akowe-logo.png')}
                            alt="akowe"
                            onClick={_ => this.handleClick('header')}
                        /> */}
                    </Link>
                </div>
                <div className="links">
                    <div
                        className="link"
                        onClick={_ => this.handleClick('about')}
                    >
                        About Us
                    </div>
                    <div
                        className="link"
                        onClick={_ => this.handleClick('specifications')}
                    >
                        Specifications
                    </div>
                    <div
                        className="link"
                        onClick={_ => this.handleClick('features')}
                    >
                        Features
                    </div>
                    <div
                        className="link"
                        onClick={_ => this.handleClick('partners')}
                    >
                        Reports
                    </div>
                    <div
                        className="link"
                        onClick={_ => this.handleClick('contact-us')}
                    >
                        Contact Us
                    </div>
                </div>
                {/* <img
                    src={require('../../assets/img/top-button.png')}
                    className="top-button"
                    style={this.state.styleButton}
                    onClick={_ => this.handleClick('header')}
                    alt="top-button"
                /> */}
            </nav>
        );
    }
}

export default Navbar;
