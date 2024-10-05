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
            <Footer />
        </div>
    );
};

export default About;

