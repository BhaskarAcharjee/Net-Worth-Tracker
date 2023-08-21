const mongoose = require("mongoose");

const CashInventorySchema = new mongoose.Schema(
  {
    denomination2000: {
      type: Number,
      default: 0,
    },
    denomination500: {
      type: Number,
      default: 0,
    },
    denomination200: {
      type: Number,
      default: 0,
    },
    denomination100: {
      type: Number,
      default: 0,
    },
    denomination50: {
      type: Number,
      default: 0,
    },
    denomination20: {
      type: Number,
      default: 0,
    },
    denomination10: {
      type: Number,
      default: 0,
    },
    denomination5: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CashInventory", CashInventorySchema);
