//can use this function to get the minimum or maxiuum of two numbers
function getMinoraxNumber(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send({ error: "Both num1 and num2 should be valid numbers" });  
    }

    const min = Math.min(num1, num2);
    res.status(200).send({ min });

    return { num1, num2 };
}

function getAverageNumber(req, res) {
     // Getting the numbers from the query string and turn them into an array of numbers
    const numbers = req.query.numbers.split(',').map(Number);

    if (numbers.some(isNaN)) {
        return res.status(400).send({ error: "All values should be valid numbers" });
    }
  // Add up all the numbers in to the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    res.status(200).send({ avg });

    return numbers;
}

module.exports = { getMinoraxNumber, getAverageNumber };