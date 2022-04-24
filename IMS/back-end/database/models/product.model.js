const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const ProductSchema = new Schema(
  {
    name: { type: String },
    netPrice: { type: Number },
    mrp: { type: Number },
    company: { type: String },
    description: { type: String },
    stock: { type: Number },
    properties: {
      type: Object
    },
    sku: {
      type: String,
      unique: true
    },
  },
  {
    usePushEach: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Model = mongoose.model("Product", ProductSchema);
module.exports = Model;
