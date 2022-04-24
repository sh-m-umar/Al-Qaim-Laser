const Customer = require("../../database/models/customer.model");
const Token = require("../../helpers/manage-tokens");

/************************************************
    Add New Customer
*************************************************/

exports.addCustomer = (req, res) => {
  const data = req.body;
  if (req.user) {
    new Customer({
      firstName: data.firstName,
      lastName: data.lastName,
      bio: data.bio,
      balance: data.balance || 0,
      email: data.email,
      phone: data.phone,
      address: data.address,
    }).save((error, user) => {
      if (error) {
        return res.status(400).send(error);
      } else {
        return res.status(200).json({
          status: true,
          code: "CUSTOMER_ADDED",
          message: "New Customer added."
        });
      }
    });
  } else {
      return res.status(200).send({
        status: false,
        code: "NOT_LOGEDIN",
        message: "Please Login first."
      });
    }
};

/************************************************
   Get Customer Balance
*************************************************/

exports.getBalance = async (req, res) => {
  const data = req.body;
  if (req.user) {
    Customer.findOne({phone: data.phone}).select('balance').lean().exec(
      (error, result) => {
        if(error){
          return res.status(200).send({
            status: false,
            code: "ERROR",
            message: error
          });
        }

        if(!result){
          return res.status(200).send({
            status: false,
            code: "CUSTOMER_NOT_FOUND",
            message: "Customer not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "CUSTOMER_BALANCE",
          result
        });
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

/************************************************
    Update Customer Information
*************************************************/

exports.updateCustomer = (req, res) => {
  const data = req.body;
  
  if (req.user) {
    Customer.findOneAndUpdate(
      { _id: data.id },
      {
      firstName: data.firstName,
      lastName: data.lastName,
      bio: data.bio,
      balance: data.balance || 0,
      email: data.email,
      phone: data.phone,
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

/************************************************
   Get Customer Balance
*************************************************/

exports.getAllCustomers = async (req, res) => {
  const data = req.body;
  if (req.user) {
    Customer.find({}).lean().exec(
      (error, result) => {
        if(error){
          return res.status(200).send({
            status: false,
            code: "ERROR",
            message: error
          });
        }

        if(!result){
          return res.status(200).send({
            status: false,
            code: "NO_CUSTOMERS_FOUND",
            message: "Customers not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "ALL_CUSTOMERS",
          result
        });
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