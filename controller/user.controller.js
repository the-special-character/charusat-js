const login = (req, res) => {
  res.send("login success");
};

const register = (req, res) => {
  res.send("register success");
};

const fetchAllUsers = (req, res) => {
  res.send("fetch all users");
};

const fetchUser = (req, res) => {
  res.send("fetch user");
};

module.exports = {
  login,
  register,
  fetchAllUsers,
  fetchUser,
};
