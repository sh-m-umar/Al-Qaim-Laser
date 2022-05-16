const Order = require('../../database/models/order.model');
const Customer = require('../../database/models/customer.model');
const Product = require('../../database/models/product.model');
const SaleRecord = require('../../database/models/saleRecord.model');
const moment = require('moment');

exports.dashboardStats = async (req, res) => {
  const { dateRange } = req.body;
  if (req.user) {
    dateFrom = dateRange? dateRange.from: moment().subtract(7, 'd').format('YYYY-MM-DD');
    dateTo = dateRange ? dateRange.to: moment().format('YYYY-MM-DD');

    console.log(`'${dateFrom}'`);
    console.log(new Date(dateTo));

    const customersCount = await Customer.countDocuments({}).lean().exec();
    const newCustomersCount = await Customer.countDocuments({
      $and: [
        {
          created_at: { $gt: new Date(dateFrom) }
        },
        {
          created_at: { $lt: new Date(dateTo) }
        },
      ],
    })
      .lean()
      .exec();
    const ordersCount = await Order.countDocuments({
      $and: [
        {
          created_at: { $gt: new Date(dateFrom) }
        },
        {
          created_at: { $lt: new Date(dateTo) }
        },
      ],
    })
      .lean()
      .exec();
    const productsSold = await SaleRecord.countDocuments({
      $and: [
        {
          created_at: { $gt: new Date(dateFrom) }
        },
        {
          created_at: { $lt: new Date(dateTo) }
        },
      ],
    })
      .lean()
      .exec();

    return res.status(200).send({
      status: true,
      code: 'STATS',
      stats: {
        customersCount,
        newCustomersCount,
        ordersCount,
        productsSold,
      },
    });
  } else {
    return res.status(200).send({
      status: false,
      code: 'NOT_LOGEDIN',
      message: 'Please Login first.',
    });
  }
};

exports.topSellingProducts = async (req, res) => {
  const { dateRange } = req.body;
  if (req.user) {
    dateFrom = dateRange? dateRange.from: moment().subtract(7, 'd').format('YYYY-MM-DD');
    dateTo = dateRange ? dateRange.to: moment().format('YYYY-MM-DD');

    const saleRecord = await SaleRecord.aggregate([
      { "$match": {
        $and: [
          {
            created_at: { $gt: new Date(dateFrom) }
          },
          {
            created_at: { $lt: new Date(dateTo) }
          },
        ],
        }
      },
      {
        $group: {
          _id: '$productId',
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'product',
        },
      },
      { $project: { count: 1, 'product.name': 1 } },
      { $limit: 4 },
      {
        $sort: { count: -1 },
      },
    ]);

    if (!saleRecord.length) {
      return res.status(200).send({
        status: false,
        code: 'ERROR',
        message: 'No records.',
      });
    }

    return res.status(200).send({
      status: true,
      code: 'TOP_SELLING_PRODUCTS',
      saleRecord,
    });
  } else {
    return res.status(200).send({
      status: false,
      code: 'NOT_LOGEDIN',
      message: 'Please Login first.',
    });
  }
};

exports.balanceRecord = async (req, res) => {
  const { dateRange } = req.body;
  if (req.user) {

    dateFrom = dateRange? dateRange.from: moment().subtract(7, 'd').format('YYYY-MM-DD');
    dateTo = dateRange ? dateRange.to: moment().format('YYYY-MM-DD');

    const totalSalesAmount = await Order.aggregate([
      { "$match": {
        $and: [
          {
            created_at: { $gt: new Date(dateFrom) }
          },
          {
            created_at: { $lt: new Date(dateTo) }
          },
        ],
        }
      },
      {
        $group: {
          _id: '',
          sum: { $sum: '$totalPrice' },
        },
      },
    ]);

    if (!totalSalesAmount.length) {
      return res.status(200).send({
        status: false,
        code: 'ERROR',
        message: 'Not found.',
      });
    }

    const totalBalance = await Customer.aggregate([
      { "$match": {
        $and: [
          {
            created_at: { $gt: new Date(dateFrom) }
          },
          {
            created_at: { $lt: new Date(dateTo) }
          },
        ],
        }
      },
      {
        $group: {
          _id: '',
          balance: { $sum: '$balance' },
        },
      },
    ]);

    if (!totalBalance.length) {
      return res.status(200).send({
        status: false,
        code: 'ERROR',
        message: 'Not found.',
      });
    }

    let amountTaken = totalBalance[0].balance - totalSalesAmount[0].sum;
    return res.status(200).send({
      status: true,
      code: 'SALE_RECORD_FOUND',
      stats: {
        totalSalesAmount: totalSalesAmount[0].sum,
        totalBalance: totalBalance[0].balance,
        amountTaken,
      },
    });
  } else {
    return res.status(200).send({
      status: false,
      code: 'NOT_LOGEDIN',
      message: 'Please Login first.',
    });
  }
};
