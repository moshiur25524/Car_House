import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <h1>Follow us On</h1>
            <div>
                <a href="https://facebook.com"><FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
                <a href="https://facebook.com"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                <a href="https://facebook.com"></a>
            </div>
            <p>All the copyright &copy; is reserved</p>
        </footer>
    );
};

export default Footer;