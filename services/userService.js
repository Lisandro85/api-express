const users = require("../data/data");

const User = require("../models/User");

const getAllUsersService = async () => {
  const users = await User.find();
  return users;
};

const getUserByIdService = async (id) => {
  const userExist = await User.findById(id);
  if (!userExist) {
    throw new Error("User not found");
  }
  return userExist;
};

const updateUserService = async (id, updateData) => {
  const userExist = await User.findById(id);

  if (!userExist) {
    throw new Error("User not found");
  }
  Object.assign(userExist, updateData);
  await userExist.save();
  return userExist;
};

const createUserService = async (data) => {
  const newUser = await User.create(data);
  return { message: "Successfully created user", user: newUser };
};

const deletedUserService = async (id) => {
  const userExist = await User.findById(id);

  if (!userExist) {
    throw new Error("User not found");
  }

  await User.deleteOne({ _id: id });

  return { message: "Successfully deleted user" };
};
module.exports = {
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  createUserService,
  deletedUserService,
};
