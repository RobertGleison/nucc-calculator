import React, { useState, onChange } from "react";

const ImcCalculator = () => {
    const [weight, setWeight] = useState("");
    const [heigth, setHeigth] = useState("");
    const [bmi, setBmi] = useState("");

    function calculateBmi() {
        let bmi =  weight / (heigth*heigth)
        setBmi(b => bmi);
    }




    return (
        <div>
        <h1>Calculates your BMI</h1>

        <div className="inputs">
            <div className="weight-input">
                <p>Enter your weight (kg)</p>
                <input type="number" />
            </div>
            <div className="heigth-input">
                <p>Enter your height (cm)</p>
                <input type="number" />
            </div>
        </div>

        <button>Calculates BMI</button>

        <div className="show-results">
            <span>Aqui vai ficar IMC: alguma coisa</span>
            <span>Aqui vai ficar Entre alguma coisa e outra</span>
        </div>
        </div>
    );
    };

export default ImcCalculator;
