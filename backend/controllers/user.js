const User = require("../models/UserModel");
const { getLoginUserId } = require("./auth");

exports.getUserDetails = async (req, res) => {
  const userId = getLoginUserId();
  // console.log("userId in userdetails: ", userId);

  try {
    // Fetch user details based on the current user's ID (you can use the userId variable)
    const user = await User.findById(userId, { fullName: 1, email: 1 }); // Fetch only the fullName and email fields

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send the user details in the response
    return res.json({
      fullName: user.fullName,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
