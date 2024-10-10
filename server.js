const express = require("express");
const app = express();
const user = require("./routes/user.route");
const products = require("./routes/products.route");
const port = 3000;

app.use(express.json());

app.use("/user", user);

app.use("/products", products);

app.use("/", (req, res) => {
  res.send("server started");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
