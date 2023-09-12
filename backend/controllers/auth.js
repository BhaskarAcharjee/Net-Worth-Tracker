const User = require("../models/UserModel");

let userId = null; // Declare a variable to store the userId

exports.getLoginUserId = () => {
  return userId;
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Set the userId variable
    userId = user._id.toString();
    console.log("User ID in login:", userId); // Print the userId to the console

    // If login is successful, send the user's ID in the response
    return res.json({ message: "Login successful", userId: userId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = new User({ fullName, email, password });
    await newUser.save();

    // Set the userId variable
    userId = newUser._id.toString();
    console.log("User ID in signup:", userId); // Print the userId to the console

    return res.json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};


// Export the userId variable
// module.exports.userId = userId;