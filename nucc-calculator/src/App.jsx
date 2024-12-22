import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import ImcCalculator from "./components/BmiCalculator";
import './App.css';

function App() {
  return (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/imc-calculator" element={<ImcCalculator />} />
    </Routes>
  </div>
);}

export default App;
