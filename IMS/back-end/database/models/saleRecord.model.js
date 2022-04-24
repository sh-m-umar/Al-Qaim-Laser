const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SaleRecordSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    netPrice: { type: Number },
    sellingPrice: { type: Number },
  },
  {
    usePushEach: true,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const Model = mongoose.model('SaleRecord', SaleRecordSchema);
module.exports = Model;
