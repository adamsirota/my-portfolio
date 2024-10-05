import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <section id = "about">
                <h2>introduction</h2>
                <p>hey, i'm adam sirota. i'm from new york city and am currently studying computer science at the university of maryland</p>
                <p>feel free to contact me at adamsirota2006@gmail.com or asirota2@umd.edu or use the contact tab on the website</p>
            </section>
            <Footer />
        </div>
    );
};

export default Home;