import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer bg-cover bg-center py-24 px-8 text-white">
            <div className="footer__content container mx-auto max-w-4xl">
                <div className="footer__content__menus grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div className="footer__content__menu flex flex-col space-y-4 text-lg font-medium">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu flex flex-col space-y-4 text-lg font-medium">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy policy</Link>
                    </div>
                    <div className="footer__content__menu flex flex-col space-y-4 text-lg font-medium">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
