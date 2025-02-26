function getMinNumber(req, res) {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send({ error: "Both num1 and num2 should be valid numbers" });
        return null;
    }

    const min = Math.min(num1, num2);
    res.status(200).send({ min });

    return { num1, num2 };
}

module.exports = getMinNumber;