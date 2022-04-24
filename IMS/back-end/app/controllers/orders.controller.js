const Order = require("../../database/models/order.model");
const Product = require("../../database/models/product.model");
const Customer = require("../../database/models/customer.model");
const SaleRecord = require('../../database/models/saleRecord.model');
const Token = require("../../helpers/manage-tokens");
const crypto = require('crypto');
const async = require('async');

/************************************************
    Add New Order
*************************************************/

exports.addOrder = async (req, res) => {
  const data = req.body;
  
  if (req.user) {
    const orderId = crypto.randomInt(0, 1000000);

    new Order({
      orderId,
      customerId: data.customerId,
      products: data.products,
      totalPrice: data.totalPrice,
      paidPrice: data.paidPrice,
      balance: data.balance,
      totalBalance: data.totalBalance
    }).save( async (error, order) => {
      if (error) {
        return res.status(400).send(error);
      } else {

        await Customer.findOneAndUpdate(
          { _id: data.customerId },
          { balance: data.totalBalance }
        ).lean().exec(
          (error, result) => {
            if (error) {
              return res.status(400).send(error);
            } else {

              async.forEachOf(
                data.products,
                async (elem, key, callback) => {
                    await Product.findOneAndUpdate(
                      { _id: elem.id },
                      { $inc: { stock: -elem.quantity } }
                    );
    
                    new SaleRecord({
                      orderId: order._id,
                      productId: elem.id,
                      customerId: data.customerId,
                      netPrice: elem.netPrice,
                      sellingPrice: elem.price,
                    }).save((error, result) => {
                        if (error) {
                          console.log('Error in adding new sale record: ', error);
                        }
                    });
                },
                (err) => {
                    if (err) {
                      console.error(err.message);
                    }
                    return res.status(200).json({
                      status: true,
                      code: "ORDER_ADDED",
                      order: order
                    });
                }
              );
            }
          }
        );
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
    Get Order
*************************************************/

exports.getOrder = async (req, res) => {
  const data = req.body;
  if (req.user) {
    await Order.findOne({ orderId: data.orderId }).lean().exec(
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
            code: "NO_ORDER_FOUND",
            message: "Order not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "ORDER_FOUND",
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
    Get All Orders by Customer ID
*************************************************/

exports.getAllCustomerOrders = async (req, res) => {
  const data = req.body;
  console.log(data);
  if (req.user) {

    const customer = await Customer.findOne({ phone: data.phone }).select('_id phone').lean().exec();

    if(!customer){
      return res.status(200).send({
        status: false,
        code: "NO_CUSTOMER_FOUND",
        message: "Cuntomer not found."
      });
    }

    await Order.find({ customerId: customer._id }).lean().exec(
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
            code: "NO_ORDERS_FOUND",
            message: "Orders not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "ORDERS_FOUND",
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