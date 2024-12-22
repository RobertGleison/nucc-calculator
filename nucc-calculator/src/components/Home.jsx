import { Link } from 'react-router-dom'
import React from "react";

const Home = () => {
    console.log("Render Home")
    return (
        <div className="home-container">
            <Link to="/calculator"><button className="home-button">Calculator</button> </Link>
            <Link to="/imc-calculator"><button className="home-button">BMI Calculator</button> </Link>
        </div>
    );
}

export default Home;