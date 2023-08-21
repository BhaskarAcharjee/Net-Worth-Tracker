const CashInventorySchema = require("../models/CashInventoryModel");

exports.updateCashInventory = async (req, res) => {
  const {
    denomination2000,
    denomination500,
    denomination200,
    denomination100,
    denomination50,
    denomination20,
    denomination10,
    denomination5,
  } = req.body;

  try {
    // Update or create cash inventory entry
    const inventory = await CashInventorySchema.findOneAndUpdate(
      {},
      {
        $set: {
          denomination2000,
          denomination500,
          denomination200,
          denomination100,
          denomination50,
          denomination20,
          denomination10,
          denomination5,
        },
      },
      { upsert: true, new: true }
    );
    

    res.status(200).json({ message: "Cash Inventory Updated", inventory });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getCashInventory = async (req, res) => {
  try {
    const inventory = await CashInventorySchema.findOne();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
