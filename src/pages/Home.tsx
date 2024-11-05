import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <section id="about">
                <h1 className='big'><span className='hey'>Hey,</span> I'm Adam Sirota.</h1>
                <p>I'm from <span className='white'>New York City</span> and am currently studying <span className='white'>Computer Science</span> at the <span className='white'>University of Maryland</span>.</p>
                <p>Feel free to contact me anytime at <a href="mailto:adamsirota2006@gmail.com">adamsirota2006@gmail.com</a> or <a href="mailto:asirota2@umd.edu">asirota2@umd.edu</a></p>
            </section>
            <section id="education">
                <h1>Education</h1>
                <h3>University of Maryland, College Park</h3>
                <p>Expected Graduation: 2027</p>
                <p>Relevant Coursework: Object-Oriented Programming, Applied Probability and Statistics</p>

                <h3>The Bronx High School of Science</h3>
                <p>September 2020 - June 2024</p>
                <p>Relevant Coursework: AP Computer Science A, AP Calculus BC, Linear Algebra, App Development</p>
            </section>
            <section id="skills">
                <h1>Skills</h1>
                <h3>Programming Languages</h3>
                <p>Java, Python, TypeScript, JavaScript, React.js, Flutter, Dart, HTML, CSS</p>

                <h3>Tools</h3>
                <p>VS Code, Eclipse, Git, Jupyter Notebook, JUnit Testing</p>
            </section>
            <section id="projects">
                <h1>Projects</h1>
                
                <article>
                    <a className = "proj" href="https://github.com/adamsirota/bank-complaints-analysis" target='_blank'>Bank Complaint Analysis</a>
                    <p>Capstone project made during pre-internship program at Citigroup. Used data science, machine learning, and artificial intelligence techniques to:</p>
                    <ol>
                        <li>Find and visualize trends in a large dataset of complaints filed to banks.</li>
                        <li>Train a model to classify new incoming complaints automatically.</li>
                    </ol>
                    <p>Presented findings to Citigroup executives and peers.</p>
                </article>

                <article>
                    <a className = "proj" href="https://github.com/adamsirota/pitch-similarity-app" target='_blank'>Pitch Similarity App</a>
                    <p>Flask app that takes user input of attributes of a baseball pitch and finds the most similar pitches using up-to-date data from PyBaseball.</p>
                </article>

                <article>
                    <a className = "proj" href="https://github.com/adamsirota/grade-calculator-app" target='_blank'>Grade Calculator App</a>
                    <p>Flutter app made in app development class. Acts as a normal calculator and a GPA calculator that:</p>
                    <ul>
                        <li>Takes user input for a student's classes and grades.</li>
                        <li>Calculates average and converts to 4.0-scale GPA.</li>
                        <li>Can calculate the total points the student needs to reach a target GPA/average.</li>
                    </ul>
                </article>

                <article>
                    <a className = "proj" href="https://github.com/adamsirota/ai-song-recommender" target='_blank'>AI Song Recommender</a>
                    <p>Project made in preparation for Citigroup pre-internship program. Uses cosine similarity to recommend similar songs from a dataset based on user input.</p>
                </article>
                
            </section>
            <Footer />
        </div>
    );
};

export default Home;
