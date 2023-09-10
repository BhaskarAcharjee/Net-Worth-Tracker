const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 20,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    account: {
      type: String,
      required: false,
      maxLength: 20,
      default: "XXXXXXXX123",
      trim: true,
    },
    ifsc: {
      type: String,
      required: false,
      maxLength: 20,
      default: "ABCD1234567",
      trim: true,
    },
    type: {
      type: String,
      default: "bankaccount",
    },
  },
  { timestamps: true }
);

// Pre-save middleware to set default values for account and ifsc
BankAccountSchema.pre("save", function (next) {
  if (!this.account) {
    this.account = "XXXXXXXX123"; // Set default account number
  }
  if (!this.ifsc) {
    this.ifsc = "ABCD1234567"; // Set default IFSC code
  }
  next();
});

module.exports = mongoose.model("BankAccount", BankAccountSchema);
