const Order = require("../../database/models/order.model");
const Product = require("../../database/models/product.model");
const Customer = require("../../database/models/customer.model");
const SaleRecord = require('../../database/models/saleRecord.model');

/************************************************
    Get Customer Sales Record
*************************************************/

exports.getCustomerSaleRecord = async (req, res) => {
  const data = req.body;
  if (req.user) {

    const customer = await Customer.findOne({ phone: data.phone }).select('_id phone').lean().exec();

    if(!customer){
      return res.status(200).send({
        status: false,
        code: "NO_CUSTOMER_FOUND",
        message: "Cuntomer not found."
      });
    }

    await SaleRecord.find({ customerId: customer._id }).lean().exec(
      (error, result) => {
        if(error){
          return res.status(200).send({
            status: false,
            code: "ERROR",
            message: error
          });
        }

        if(!result.lenght){
          return res.status(200).send({
            status: false,
            code: "NO_SALE_RECORD_FOUND",
            message: "Sale record not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "SALE_RECORD_FOUND",
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
    Get Product Sales Record
*************************************************/

exports.getProductSaleRecord = async (req, res) => {
  const data = req.body;
  if (req.user) {

    const product = await Product.findOne({ sku: data.sku }).select('_id sku').lean().exec();

    if(!product){
      return res.status(200).send({
        status: false,
        code: "NO_PRODUCT_FOUND",
        message: "Product not found."
      });
    }

    await SaleRecord.find({ productId: product._id }).lean().exec(
      (error, result) => {
        if(error){
          return res.status(200).send({
            status: false,
            code: "ERROR",
            message: error
          });
        }

        if(!result.length){
          return res.status(200).send({
            status: false,
            code: "NO_SALE_RECORD_FOUND",
            message: "Sale record not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "SALE_RECORD_FOUND",
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
    Get Sales Record by Date
*************************************************/

exports.getSaleRecordByDate = async (req, res) => {
  const data = req.body;

  if (req.user) {
    SaleRecord.find({
      created_at: {
          $gte: new Date(data.start), 
          $lt: new Date(data.end)
      }
  }).lean().exec(
    (error, result) => {
      if(error){
        return res.status(200).send({
          status: false,
          code: "ERROR",
          message: error
        });
      }

      if(!result.length){
        return res.status(200).send({
          status: false,
          code: "NO_SALE_RECORD_FOUND",
          message: "Sale record not found."
        });
      }

      return res.status(200).send({
        status: true,
        code: "SALE_RECORD_FOUND",
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