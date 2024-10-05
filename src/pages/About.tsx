import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <section id="education">
                <h2>Education</h2>
                <h4>University of Maryland, College Park</h4>
                <p>Expected Graduation: 2027</p>
                <p>Relevant Coursework: Object-Oriented Programming, Applied Probability and Statistics</p>

                <h4>The Bronx High School of Science</h4>
                <p>September 2020 - June 2024</p>
                <p>Relevant Coursework: AP Computer Science A, AP Calculus BC, Linear Algebra, App Development</p>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <h4>Programming Languages</h4>
                <p>Java, Python, TypeScript, JavaScript, React.js, Flutter, Dart, HTML, CSS</p>

                <h4>Tools</h4>
                <p>VS Code, Eclipse, Git, Jupyter Notebook, JUnit Testing</p>
            </section>
            <Footer />
        </div>
    );
};

export default About;
