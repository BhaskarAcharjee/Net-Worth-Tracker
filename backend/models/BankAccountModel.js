const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema(
  {
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
    // date: {
    //     type: Date,
    //     required: true,
    //     trim: true
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BankAccount", BankAccountSchema);
