exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Get All Users"
  });
};

exports.createUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Create User"
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Get User"
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Update User"
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Delete User"
  });
};
