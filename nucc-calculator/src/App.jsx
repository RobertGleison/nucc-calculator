import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
  <div className="calculator">
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/calculator" element={<Calculator />} /> */}
      {/* <Route path="/imc-calculator" element={<ImcCalculator />} /> */}
    </Routes>
  </div>
);}

export default App;
