const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("");
});
router.get("/:id", (req, res) => {
  res.send("cart id");
});
router.post("/:cartId", (req, res) => {
  res.send("add item in cart");
});
router.put("/:cartId", (req, res) => {
  res.send("update item in cart");
});

router.patch("/:cartId", (req, res) => {
  res.send("patch item in cart");
});

router.delete("/:cartId", (req, res) => {
  res.send("delete item from cart");
});

module.exports = router;
