// Import the necessary modules
const CashInventorySchema = require("../models/CashInventoryModel");
const { getLoginUserId } = require("./auth");

// Function to get or initialize denominations
const getOrInitializeDenominations = async (userId) => {
  try {
    // Find the cash inventory entry for the user
    let inventory = await CashInventorySchema.findOne({ user: userId });

    if (!inventory) {
      // If no cash inventory exists for the user, create one with zero denominations
      inventory = new CashInventorySchema({
        user: userId,
        denomination2000: 0,
        denomination500: 0,
        denomination200: 0,
        denomination100: 0,
        denomination50: 0,
        denomination20: 0,
        denomination10: 0,
        denomination5: 0,
      });
      await inventory.save();
    }

    return inventory;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update the cash inventory for a specific user or create a new one with zero denominations
exports.updateCashInventory = async (req, res) => {
  const userId = getLoginUserId(); // Get the user ID using the function
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
    // Get or initialize denominations for the user
    let inventory = await getOrInitializeDenominations(userId);

    // Update the denominations
    inventory.denomination2000 = denomination2000;
    inventory.denomination500 = denomination500;
    inventory.denomination200 = denomination200;
    inventory.denomination100 = denomination100;
    inventory.denomination50 = denomination50;
    inventory.denomination20 = denomination20;
    inventory.denomination10 = denomination10;
    inventory.denomination5 = denomination5;

    // Save the updated inventory
    await inventory.save();

    res.status(200).json({ message: "Cash Inventory Updated", inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get the cash inventory for a specific user
exports.getCashInventory = async (req, res) => {
  const userId = getLoginUserId(); // Get the user ID using the function

  try {
    // Get or initialize denominations for the user
    const inventory = await getOrInitializeDenominations(userId);
    res.status(200).json(inventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
