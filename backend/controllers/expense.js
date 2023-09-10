const ExpenseSchema = require("../models/ExpenseModel");
const { getLoginUserId } = require("./auth");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const userId = getLoginUserId(); // Get the user ID using the function

  const income = ExpenseSchema({
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
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(income);
};

exports.getExpense = async (req, res) => {
  const userId = getLoginUserId(); // Get the user ID using the function
  try {
    const incomes = await ExpenseSchema.find({ user: userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
