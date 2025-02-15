const { Router } = require("express");
const {
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  createUserController,
  deletedUserController,
} = require("../controller/usersController");

const router = Router();

router.get("/", getAllUsersController);

router.get("/:id", getUserByIdController);

router.post("/", createUserController);

router.patch("/:id", updateUserController);

router.delete("/:id", deletedUserController);

module.exports = router;
