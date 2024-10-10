const express = require("express");
const loginSchema = require("../validations/login.validation");
const registrationSchema = require("../validations/registration.validation");
const validateMiddleware = require("../middleware/validate.middleware");
const {
  login,
  register,
  fetchAllUsers,
  fetchUser,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/login", validateMiddleware(loginSchema), login);

router.post("/register", validateMiddleware(registrationSchema), register);

router.get("/", fetchAllUsers);

router.get("/:id", fetchUser);

module.exports = router;
