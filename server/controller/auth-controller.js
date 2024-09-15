const User = require("../models/user-model");
var bcrypt = require('bcryptjs');

// Home route
const home = async (req, res) => {
  try {
    res.status(201).send("Welcome to the server using router!");
  } catch (error) {
    console.log(error);
  }
};

// Get all users data
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Registration logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: 'User Already Exists' });
    }

    // Hash Password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username, email, phone, password: hash_password
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json('Internal Server Error');
  }
};

// User login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, userExist.password);
    if (passwordMatch) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal Server Error');
  }
};

module.exports = { home, register, login, getUsers };
