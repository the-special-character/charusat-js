const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("products data");
});
router.get("/:id", (req, res) => {
  res.send("product data");
});
router.post("/", (req, res) => {
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
