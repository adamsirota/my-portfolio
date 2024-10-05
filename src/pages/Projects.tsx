import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects: React.FC = () => {
    return (
        <div>
            <Header />
            <section>
                <a href="https://github.com/adamsirota/bank-complaints-analysis">bank complaint analysis</a>
                <p>capstone project made during pre-internship program at citigroup. used data science, machine learning, and artificial intelligence techniques to:</p>
                <p>1. find and visualize trends in a large dataset of complaints filed to banks</p>
                <p>2. train a model to classify new incoming complaints automatically</p>
                <p>presented findings to citigroup executives and peers</p>
                <a href="https://github.com/adamsirota/pitch-similarity-app">pitch similarity app</a>
                <p>flask app that takes user input of attributes of a baseball pitch and finds the most similar pitches using up-to-date data from pybaseball</p>
                <a href="https://github.com/adamsirota/grade-calculator-app">grade calculator app</a>
                <p>flutter app made in app development class, acts as a normal calculator and a gpa calculator that:</p>
                <p>takes user input for a student's classes and grades</p>
                <p>calculates average and converts to 4.0-scale gpa</p>
                <p>can calculate the total points the student needs to reach a target gpa/average</p>
                <a href="https://github.com/adamsirota/ai-song-recommender">ai song recommender</a>
                <p>project made in preparation for citigroup pre-internship program</p>
                <p>uses cosine similarity to recommend similar songs from a dataset based on a user input</p>
            </section>
            <Footer />
        </div>
    )
}

export default Projects;