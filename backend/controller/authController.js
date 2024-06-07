import { generateToken } from "../jwt/jwtService.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

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
    //hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    console.log("haspassword: " + hashpassword);
    const maleImg = "https://avatar.iran.liara.run/public/36";
    const femaleImg = "https://avatar.iran.liara.run/public/51";

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender: gender,
      phone: phone,
      profileImg: gender == "male" ? maleImg : femaleImg,
      username: username,
      password: hashpassword,
    });

    await newUser.save();
    return res.send({ data: newUser });
  } catch (error) {
    console.log("Error signup", error.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = generateToken(username);
        return res.send({ token: token });
      } else res.send("password is incorrect");
    }
    return res.send("username is incorrect");
  } catch (err) {
    console.log("login fail", err);
  }
};
const logout = (req, res) => {
  res.send("logout");
};

export { signup, login, logout };
