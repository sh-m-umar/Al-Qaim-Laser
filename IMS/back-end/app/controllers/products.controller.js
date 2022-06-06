const Product = require("../../database/models/product.model");
const SaleRecord = require('../../database/models/saleRecord.model');
const Token = require("../../helpers/manage-tokens");
const ObjectId = require('mongoose').Types.ObjectId; 


/************************************************
    Add New Product
*************************************************/

exports.addProduct = (req, res) => {
  const data = req.body;
  if (req.user) {
    new Product({
      name: data.name,
      netPrice: data.netPrice,
      mrp: data.mrp,
      company: data.company,
      description: data.description,
      stock: data.stock,
      properties: data.properties,
      sku: data.sku,
    }).save((error, result) => {
      if (error) {
        return res.status(400).send(error);
      } else {
        return res.status(200).json({
          status: true,
          code: "PRODUCT_ADDED",
          message: "New product added."
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
    Get Product
*************************************************/

exports.getProduct = async (req, res) => {
  const data = req.body;

  if (req.user) {
    Product.find({ sku: data.sku }).lean().exec(
      async (error, result) => {
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
            code: "NO_PRODUCT_FOUND",
            message: "Product not found."
          });
        }

        result[0].totalSale = await SaleRecord.countDocuments({productId: ObjectId(result[0]._id)});

        return res.status(200).send({
          status: true,
          code: "PRODUCT_FOUND",
          product: result[0]
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
    Get All Product
*************************************************/

exports.getAllProducts = async (req, res) => {
  const data = req.body;
  
  if (req.user) {
    Product.find({}).lean().exec(
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
            code: "NO_PRODUCTS_FOUND",
            message: "Products not found."
          });
        }

        return res.status(200).send({
          status: true,
          code: "ALL_PRODUCTS",
          products: result
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
    Update Stock
*************************************************/

exports.updateStock = async (req, res) => {
  const data = req.body;

  if (req.user) {
    Product.findOneAndUpdate(
      { sku: data.sku },
      {
        $inc: { stock: data.stock }
      },
      { new: true },
      (error, result) => {
        if (error) {
          return res.status(400).send({
            status: false,
            code: "STOCK_UPDATE_FAILED",
            message: error
          });
        } else {
          return res.status(200).send({
            status: true,
            code: "STOCK_UPDATED",
            result
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
    Update Product
*************************************************/

exports.updateProduct = async (req, res) => {
  const data = req.body;

  if (req.user) {
    Product.findOneAndUpdate(
      { sku: data.sku },
      {
        name: data.name,
        netPrice: data.netPrice,
        mrp: data.mrp,
        company: data.company,
        description: data.description,
        stock: data.stock,
        properties: data.properties,
      },
      { new: true },
      (error, result) => {
        if (error) {
          return res.status(400).send({
            status: false,
            code: "STOCK_UPDATE_FAILED",
            message: error
          });
        } else {
          return res.status(200).send({
            status: true,
            code: "STOCK_UPDATED",
            result
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