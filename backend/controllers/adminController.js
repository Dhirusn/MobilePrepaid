import User from '../models/User.js';
import Transfer from '../models/Transfer.js';
import Topup from '../models/Topup.js';
import Payment from '../models/Payment.js';
import moment from 'moment';

export const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

export const getTopupLogs = async (req, res) => {
  const logs = await Topup.find().sort({ createdAt: -1 }).populate('user', 'email');
  res.json(logs);
};

export const getCreditTransfers = async (req, res) => {
  const transfers = await Transfer.find().sort({ createdAt: -1 }).populate('fromUser toUser', 'email');
  res.json(transfers);
};

export const getPaymentLogs = async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 }).populate('user', 'email');
  res.json(payments);
};

export const getOverviewStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const activeUsers = await User.countDocuments({ credits: { $gt: 0 } });

  const totalTopupVolume = await Topup.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  res.json({
    totalUsers,
    activeUsers,
    totalTopupVolume: totalTopupVolume[0]?.total || 0,
  });
};

export const getDailyTopups = async (req, res) => {
  const last7Days = [...Array(7).keys()].map((i) =>
    moment().subtract(i, 'days').format('YYYY-MM-DD')
  );

  const data = await Topup.aggregate([
    {
      $match: {
        createdAt: {
          $gte: moment().subtract(6, 'days').startOf('day').toDate(),
        },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
        total: { $sum: "$amount" },
      },
    },
  ]);

  const dailyTopups = last7Days.reverse().map((date) => {
    const found = data.find((item) => item._id === date);
    return { date, total: found ? found.total : 0 };
  });

  res.json(dailyTopups);
};

export const getDailyPayments = async (req, res) => {
  const last7Days = [...Array(7).keys()].map((i) =>
    moment().subtract(i, 'days').format('YYYY-MM-DD')
  );

  const data = await Payment.aggregate([
    {
      $match: {
        createdAt: {
          $gte: moment().subtract(6, 'days').startOf('day').toDate(),
        },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
        total: { $sum: "$amount" },
      },
    },
  ]);

  const dailyPayments = last7Days.reverse().map((date) => {
    const found = data.find((item) => item._id === date);
    return { date, total: found ? found.total : 0 };
  });

  res.json(dailyPayments);
};