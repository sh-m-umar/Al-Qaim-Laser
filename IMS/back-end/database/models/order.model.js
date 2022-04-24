const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const OrderSchema = new Schema(
  {
    orderId: { type: Number },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
    },
    products: [{
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: { type: Number },
      netPrice: { type: Number },
      price: { type: Number },
      total: { type: Number } 
    }],
    totalPrice: { type: Number },
    paidPrice: { type: Number },
    balance: { type: Number },
    totalBalance: { type: Number },
  },
  {
    usePushEach: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Model = mongoose.model("Order", OrderSchema);
module.exports = Model;
