const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user.route");
const products = require("./routes/products.route");
const cart = require("./routes/cart.route");
const port = 3000;

// MongoDB connection
const mongoDBUrl =
  "mongodb+srv://charusat:8SyqZj01CeDL6yfT@charusat.nn5q5.mongodb.net/";
mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.use(express.json());

app.use("/user", user);
app.use("/products", products);
app.use("/carts", cart);

app.use("/", (req, res) => {
  res.send("server started");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
