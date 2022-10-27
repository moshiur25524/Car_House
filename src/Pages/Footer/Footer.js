import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css'

const Footer = () => {
    // const getYear =() =>{
    //     return new Date().getFullYear();
    // }

    return (
        <footer className='footer'>
            <h1>Follow us On</h1>
            <div className='social-icons'>
                <a href="https://facebook.com" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://youtube.com" target='_blank' rel="noreferrer"><i class="fa fa-youtube-play"></i></a>
                <a href="https://twitter.com" target='_blank' rel="noreferrer"><i class="fa fa-twitter"></i></a>
                <a href="https://instagram.com" target='_blank' rel="noreferrer"><i class="fa fa-instagram"></i></a>
            </div>
            <p>All the copyright &copy; 2018-{this.getYear()} is reserved</p>
        </footer>
    );
};

export default Footer;