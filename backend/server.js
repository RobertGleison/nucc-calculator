const express = require('express');
const cors = require('cors'); // You'll need this for cross-origin requests
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// BMI calculation endpoint
app.post('/calculateBmi', (req, res) => {
  const { weight, height } = req.body;
  
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  // Determine BMI category
  let message;
  if (bmi < 18.5) {
    message = `Underweight. Your BMI is: ${bmi.toFixed(2)}`;
  } else if (bmi < 25) {
    message = `Healthy weight. Your BMI is: ${bmi.toFixed(2)}`;
  } else if (bmi < 30) {
    message = `Overweight. Your BMI is: ${bmi.toFixed(2)}`;
  } else {
    message = `Obesity. Your BMI is: ${bmi.toFixed(2)}`;
  }

  res.json({
    bmi: bmi.toFixed(2),
    message: message
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});