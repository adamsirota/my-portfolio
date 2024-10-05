import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects: React.FC = () => {
    return (
        <div>
            <Header />
            <section>
                <h2>Projects</h2>
                
                <article>
                    <a href="https://github.com/adamsirota/bank-complaints-analysis">Bank Complaint Analysis</a>
                    <p>Capstone project made during pre-internship program at Citigroup. Used data science, machine learning, and artificial intelligence techniques to:</p>
                    <ol>
                        <li>Find and visualize trends in a large dataset of complaints filed to banks.</li>
                        <li>Train a model to classify new incoming complaints automatically.</li>
                    </ol>
                    <p>Presented findings to Citigroup executives and peers.</p>
                </article>

                <article>
                    <a href="https://github.com/adamsirota/pitch-similarity-app">Pitch Similarity App</a>
                    <p>Flask app that takes user input of attributes of a baseball pitch and finds the most similar pitches using up-to-date data from PyBaseball.</p>
                </article>

                <article>
                    <a href="https://github.com/adamsirota/grade-calculator-app">Grade Calculator App</a>
                    <p>Flutter app made in app development class. Acts as a normal calculator and a GPA calculator that:</p>
                    <ul>
                        <li>Takes user input for a student's classes and grades.</li>
                        <li>Calculates average and converts to 4.0-scale GPA.</li>
                        <li>Can calculate the total points the student needs to reach a target GPA/average.</li>
                    </ul>
                </article>

                <article>
                    <a href="https://github.com/adamsirota/ai-song-recommender">AI Song Recommender</a>
                    <p>Project made in preparation for Citigroup pre-internship program. Uses cosine similarity to recommend similar songs from a dataset based on user input.</p>
                </article>
                
            </section>
            <Footer />
        </div>
    );
};

export default Projects;
