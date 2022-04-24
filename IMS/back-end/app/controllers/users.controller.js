const User = require("../../database/models/user.model");
const Token = require("../../helpers/manage-tokens");

/************************************************
    Register New User
*************************************************/

exports.createUser = (req, res) => {
  const data = req.body;

  const newUser = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    password: data.password,
    phone: data.phone,
    role: data.role,
    address: data.address,
  }).save((error, user) => {
    if (error) {
      return res.status(400).send(error);
    } else {
      return res.status(200).json({
        status: true,
        code: "USER_REGISTERED",
        message: "User has been registered."
      });
    }
  });
};

/************************************************
    Login User
*************************************************/

exports.verifyUser = async (req, res) => {
  const data = req.body;

  const user = await User.findOne({
    $or: [
      {email: data.username},
      {username: data.username},
    ]
  });
  if (!user) {
    return res.status(200).send({
        status: false,
        code: "USER_NOT_FOUND",
        message: "User not found."
    });
  } else {
    user.comparePassword(data.password, async (err, isMatch) => {
      if (isMatch) {
        const token = Token.createToken({
          id: user._id.toString(),
          email: user.email,
        });
        return res.status(200).send({
          status: true,
          code: "LOGEDIN",
          message: "User login successfully.", token
        });
      } else if (!isMatch) {
        return res.status(400).send({
          status: false,
          code: "INVALID_CREDENTIALS",
          message: "User login failed."
        });
      }
    });
  }
};

/************************************************
    Update User Information
*************************************************/

exports.updateUser = (req, res) => {
  const data = req.body;

  if (req.user) {
    User.findOneAndUpdate(
      { _id: req.user },
      {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        phone: data.phone,
        role: data.role,
        address: data.address,
      },
      { new: true },
      (error, user) => {
        if (error) {
          return res.status(400).send({
            status: false,
            code: "UPDATE_FAILED",
            message: error
          });
        } else {
          return res.status(400).send({
            status: true,
            code: "USER_UPDATED",
            user
          });
        }
      }
    );
  } else {
    return res.status(200).send({
      status: false,
      code: "NOT_LOGEDIN",
      message: "Please Login first."
    });
  }
};
