const express = require("express");
const { getMinNumber } = require("./util");

const app = new express();
const port = 3000;

app.get("/number/min", (req, res) => {
//can use this function to get the minimum or maxiuum of two numbers in different endpoints
    const numbers = getMinoraxNumber(req, res);
    if (!numbers) {
        return;
    }
    const { num1, num2 } = numbers;
    res.send({ min: Math.min(num1, num2) });
});


app.get("/number/max", (req, res) => {
  //can use this function to get the minimum or maxiuum of two numbers in different endpoints
    const numbers = getMinoraxNumber(req, res);
    if (!numbers) {
        return;
    }
    const { num1, num2 } = numbers;
    res.send({ max: Math.max(num1, num2) });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});