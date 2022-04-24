const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const CustomerSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    balance: { type: Number },
    email: {
      type: String,
      unique: true,
      lowercase: true
	  },
    bio: { type: String },
    phone: {
      type: String,
      unique: true,
      required: true
    },
    address: {
      addressLines: {type: String},
      postcode: {type: Number},
      city: {type: String},
      state: {type: String},
      country: {type: String},
    },
  },
  {
    usePushEach: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Model = mongoose.model("Customer", CustomerSchema);
module.exports = Model;
