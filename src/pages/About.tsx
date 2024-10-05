import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <section id = "education">
                <h2>education</h2>
                <h4>university of maryland, college park</h4>
                <p>expected graduation: 2027</p>
                <p>relevant coursework: object-oriented programming, applied probability and statistics</p>
                <h4>the bronx high school of science</h4>
                <p>september 2020 - june 2024</p>
                <p>relevant coursework: ap computer science a, ap calculus bc, linear algebra, app development</p>
            </section>
            <section id = "skills">
                <h2>skills</h2>
                <h4>programming languages</h4>
                <p>java, python, typescript, javascript, react.js, flutter, dart, html, css</p>
                <h4>tools</h4>
                <p>vs code, eclipse, git, jupyter notebook, junit testing</p>
            </section>
            <Footer />
        </div>
    );
};

export default About;

