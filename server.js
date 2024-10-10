const express = require("express");
const mongoose = require("mongoose");
const { Pool } = require("pg");
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

// PostgreSQL connection
const pgPool = new Pool({
  connectionString:
    "postgresql://postgres.przjmwudxatnglmzjyjx:8SyqZj01CeDL6yfT@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
});

pgPool
  .connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch((err) => console.error("PostgreSQL connection error:", err));

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
