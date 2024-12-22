import React from "react";

const Home = () => {
    console.log("Render Home")
    return (
        <div className="home-container">
            <button>Calculator</button> 
            <button>IMC Calculator</button> 
        </div>
    );
}

export default Home;