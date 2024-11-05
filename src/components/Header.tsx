import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h2 className = "logo">Adam Sirota</h2> 
            <nav>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="https://www.linkedin.com/in/adam-sirota-56b416274/">LinkedIn</a>
                <a href="https://github.com/adamsirota">GitHub</a>
            </nav>
        </header>
    );
};

export default Header;
