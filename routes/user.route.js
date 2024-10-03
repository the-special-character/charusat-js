const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("login success");
});
router.post("/register", (req, res) => {
  res.send("register success");
});
router.get("/", (req, res) => {
  res.send("user data");
});
router.get("/:id", (req, res) => {
  res.send("user id data");
});

module.exports = router;
