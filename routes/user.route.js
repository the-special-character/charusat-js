const express = require("express");

const loginSchema = require("../validations/login.validation");
const registrationSchema = require("../validations/registration.validation");
const validateMiddleware = require("../middleware/validate.middleware");

const router = express.Router();

router.post("/login", validateMiddleware(loginSchema), (req, res) => {
  res.send("login success");
});

router.post("/register", validateMiddleware(registrationSchema), (req, res) => {
  res.send("register success");
});

router.get("/", (req, res) => {
  res.send("user data");
});

router.get("/:id", (req, res) => {
  res.send("user id data");
});

module.exports = router;
