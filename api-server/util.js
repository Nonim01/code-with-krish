//can use this function to get the minimum or maxiuum of two numbers
function getMinoraxNumber(req, res) {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {//Uusing only 2 numbers thats why using isNaN(num1) || isNaN(num2
    return res
      .status(400)
      .send({ error: "Both num1 and num2 should be valid numbers" });
  }

  const min = Math.min(num1, num2);
  res.status(200).send({ min });

  return { num1, num2 };
}

function getAverageNumber(req, res) {
  // Getting the numbers from the query string and turn them into an array of numbers
  const numbers = req.query.numbers.split(",").map(Number);

  if (numbers.some(isNaN)) {//Here, numbers is an array with multiple values, so using numbers.some(isNaN)
    return res
      .status(400)
      .send({ error: "All values should be valid numbers" });
  }
  // Add up all the numbers in to the array
  const sum = numbers.reduce((acc, num) => acc + num, 0);//.reduce() is array method that allows to reduce array to a single value 
  const avg = sum / numbers.length;
  res.status(200).send({ avg });

  return numbers;
}

function getSortedNumbers(req, res) {
  // getting numbers from the query string, split them into an array and convert to numbers
  const numbers = req.query.numbers.split(",").map(Number);
  //getting the type
  const type = req.query.type;

  if (numbers.some(isNaN)) {
    return res
      .status(400)
      .send({ error: "All values should be valid numbers" });
  }

  if (type !== "asc" && type !== "dec") {
    return res
      .status(400)
      .send({ error: "Type must be either 'asc' or 'dec'" });
  }

  // sort the numbers based on the 'type' parameter
  // If 'asc' sort in ascending order S to L
  // If 'dec' sort in descending order L to S
  const sortedNumbers = numbers.sort((a, b) =>
    // Sort in ascending order if type is asc or otherwise in descending order
    type === "asc" ? a - b : b - a
  );
  res.status(200).send({ sortedNumbers });

  return sortedNumbers;
}

function getCountOccurrences(req, res) {
  const values = req.query.numbers.split(",");
  const searchValue = req.query.search;

  if (!searchValue) {
    return res.status(400).send({ error: "Search value must be provided" });
  }

  // Count how many times searchvalue appears in the values array
  const count = values.filter((value) => value === searchValue).length;
  res.status(200).send({ count });

  return count;
}

module.exports = {
  getMinoraxNumber,
  getAverageNumber,
  getSortedNumbers,
  getSortedNumbers,
  getCountOccurrences,
};
