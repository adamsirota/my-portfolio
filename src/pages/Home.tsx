import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <section id="about">
                <h2>Introduction</h2>
                <p>Hey, I'm Adam Sirota. I'm from New York City and currently studying Computer Science at the University of Maryland.</p>
                <p>Feel free to contact me at <a href="mailto:adamsirota2006@gmail.com">adamsirota2006@gmail.com</a> or <a href="mailto:asirota2@umd.edu">asirota2@umd.edu</a></p>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
