const WalletAccountSchema = require("../models/WalletAccountModel");
const { getLoginUserId } = require("./auth");

exports.addWalletAccount = async (req, res) => {
  const { name, amount, description } = req.body;
  const userId = getLoginUserId(); // Get the user ID using the function

  const walletAccount = WalletAccountSchema({
    user: userId,
    name,
    amount,
    description,
  });

  try {
    //validations
    if (!name || !amount) {
      return res
        .status(400)
        .json({ message: "Mandatory fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await walletAccount.save();
    res.status(200).json({ message: "Wallet Account Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(walletAccount);
};

exports.getWalletAccounts = async (req, res) => {
  const userId = getLoginUserId(); // Get the user ID using the function
  try {
    const walletAccounts = await WalletAccountSchema.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(walletAccounts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateWalletAccount = async (req, res) => {
  const { id } = req.params;
  const { name, amount, description } = req.body;

  try {
    const updatedWalletAccount = await WalletAccountSchema.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          amount,
          description,
        },
      },
      { new: true }
    );

    res.status(200).json({
      message: "Wallet Account Updated",
      walletAccount: updatedWalletAccount,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteWalletAccount = async (req, res) => {
  const { id } = req.params;
  WalletAccountSchema.findByIdAndDelete(id)
    .then((walletAccount) => {
      res.status(200).json({ message: "Wallet Account Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
