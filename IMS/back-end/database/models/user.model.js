const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
	  },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
	  },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      unique: true
    },
    role: {
      type: String,
      enum: ['Admin', 'Retailer'],
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

UserSchema.pre("save", function (next) {
  const self = this;
  if (!self.isModified("password")) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(self.password, salt, function (err, hash) {
      if (err) return next(err);
      self.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, callback);
};

const Model = mongoose.model("User", UserSchema);
module.exports = Model;
