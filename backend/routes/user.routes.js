const router = require("express").Router();
const UserModel = require("../models/User.model");
const generateToken = require("../config/jwt.config");

// SIGN UP
router.post("/signup", async (req, res) => {
  try {
    const { password } = req.body;

    if (
      !password ||
      !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)
    ) {
      return res.status(400).json({
        message:
          "Password is required and must have at least 8 characters, uppercase and lowercase letters, numbers and special characters.",
      });
    }

    const createdUser = await UserModel.create(req.body);

    return res
      .status(201)
      .json({ message: "User created with success!", createdUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ message: "Wrong password or email." });
    }

    if (user) {
      const token = generateToken(user);
      return res.status(200).json({
        token: token,
        user: { ...user._doc },
      });
    } else {
      return res.status(400).json({ message: "Wrong password or email." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

module.exports = router;
