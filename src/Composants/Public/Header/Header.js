import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <ul>
                    <li><Link to ="/home">Home</Link></li>
                    <li><Link to ="/article">Article</Link></li>
                    <li><Link to ="/login">Login</Link></li>
                    <li><Link to ="/panier">Panier</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
