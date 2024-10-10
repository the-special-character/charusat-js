const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres",
  "postgres.przjmwudxatnglmzjyjx",
  "8SyqZj01CeDL6yfT",
  {
    host: "aws-0-ap-south-1.pooler.supabase.com",
    dialect: "postgres",
    port: 6543,
  }
);

const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected with Sequelize");
  } catch (err) {
    console.error("PostgreSQL connection error:", err);
  }
};

authenticateDatabase();

module.exports = sequelize;
