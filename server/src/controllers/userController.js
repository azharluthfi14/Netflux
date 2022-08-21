/* eslint-disable no-unused-vars */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserSchema from "../models/user.js";

export const registerUser = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "Email address already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt); // Hash user password with salt
    const newUser = new UserSchema({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send({ message: "User has been created" });
  } catch (error) {
    console.log(error);
    next();
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    // Compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePassword) {
      return res
        .status(400)
        .send({ message: "Invalid email address or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
      expiresIn: "5d",
    });

    const { password, ...infoUser } = user._doc;
    res.status(200).send({ ...infoUser, token });
  } catch (error) {
    console.log(error);
    next();
  }
};
