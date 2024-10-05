import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Adam Sirota</h1>
            <nav>
                <Link to = "/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <a href="https://www.linkedin.com/in/adam-sirota-56b416274/">LinkedIn</a>
                <a href="https://github.com/adamsirota">Github</a>
            </nav>
        </header>
    );
};

export default Header;
