import User from "../models/user.js";

const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phone,
      username,
      password,
      comformPassword,
    } = req.body;

    if (password !== comformPassword) {
      return res.send({ message: "comformPassword is invalid!" });
    }

    const user = await User.findOne({ username: username });
    if (user) {
      return res.send({ message: "Username already exists" });
    }
  } catch (error) {
    console.log("Error signup", console.error.message);
  }
};

const login = (req, res) => {
  res.send("login");
};
const logout = (req, res) => {
  res.send("logout");
};

export { signup, login, logout };
