const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path as necessary

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Sync the model with the database
User.sync()
  .then(() => console.log("User model synced with the database"))
  .catch((err) => console.error("Error syncing User model:", err));

module.exports = User;
