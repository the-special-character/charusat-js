const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://charusat:8SyqZj01CeDL6yfT@charusat.nn5q5.mongodb.net/"
);

router.get("/", (req, res) => {
  res.send("");
});
router.get("/:id", (req, res) => {
  res.send("product data");
});
router.post("/", (req, res) => {
  const product = req.body;

  res.send("add product");
});
router.put("/:id", (req, res) => {
  res.send("put product");
});

router.patch("/:id", (req, res) => {
  res.send("patch product");
});

router.delete("/:id", (req, res) => {
  res.send("delete product");
});

module.exports = router;
