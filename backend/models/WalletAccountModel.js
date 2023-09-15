const mongoose = require("mongoose");

const WalletAccountSchema = new mongoose.Schema(
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
      maxLength: 30,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 15,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      maxLength: 100,
      trim: true,
    },
    type: {
      type: String,
      default: "walletaccount",
    },
  },
  { timestamps: true }
);

// Pre-save middleware to set default values for account and ifsc
WalletAccountSchema.pre("save", function (next) {
  if (!this.description) {
    this.description = "N/A"; // Set default description
  }
  next();
});

module.exports = mongoose.model("WalletAccount", WalletAccountSchema);
