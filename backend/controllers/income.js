const IncomeSchema = require("../models/IncomeModel");
const { getLoginUserId } = require("./auth");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const userId = getLoginUserId(); // Get the user ID using the function

  const income = IncomeSchema({
    user: userId,
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //validations
    if (!title || !category || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(income);
};

exports.getIncomes = async (req, res) => {
  const userId = getLoginUserId(); // Get the user ID using the function
  //   console.log("User ID in Get Incomes:", userId); // Print the userId to the console

  try {
    const incomes = await IncomeSchema.find({ user: userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
