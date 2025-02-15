const { z } = require("zod");
const {
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  createUserService,
  deletedUserService,
} = require("../services/userService");

const { userSchema } = require("../validations/validations.User");

const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = userSchema.parse(req.body);
    const updateUser = await updateUserService(id, updateData);
    res.status(201).json({ message: "Successfully updated user", updateUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserController = async (req, res) => {
  try {
    const validateData = userSchema.parse(req.body);

    const user = await createUserService(validateData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletedUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deletedUserService(id);
    return res.status(200).json(result);
  } catch (error) {
    if (error.message === "User not found") {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  createUserController,
  deletedUserController,
};
