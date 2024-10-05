import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>adam sirota's personal portfolio</h1>
            <nav>
                <Link to = "/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
                <a href="https://www.linkedin.com/in/adam-sirota-56b416274/">my linkedin</a>
                <a href="https://github.com/adamsirota">my github</a>
            </nav>
        </header>
    );
};

export default Header;
