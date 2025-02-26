const express = require("express");
const getMinNumber = require("./util");
const app = new express();
const port = 3000;

app.get("/number/min", (req, res) => {

    const numbers = getMinNumber(req, res);
    if (!numbers) {
        return;
    }
    const { num1, num2 } = numbers;
    res.send({ min: Math.min(num1, num2) });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});