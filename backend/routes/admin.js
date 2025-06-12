import express from 'express';
import {
  getAllUsers,
  getTopupLogs,
  getCreditTransfers,
  getPaymentLogs,
  getOverviewStats,
  getDailyTopups,
  getDailyPayments,
} from '../controllers/adminController.js';
import { protect } from '../middlewares/auth.js';
import { adminOnly } from '../middlewares/adminAuth.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin panel APIs for analytics, logs, and user management
 */

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all registered users
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', protect, adminOnly, getAllUsers);

/**
 * @swagger
 * /admin/topups:
 *   get:
 *     summary: Get top-up transaction logs
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of top-up logs
 */
router.get('/topups', protect, adminOnly, getTopupLogs);

/**
 * @swagger
 * /admin/transfers:
 *   get:
 *     summary: Get user-to-user credit transfers
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of credit transfers
 */
router.get('/transfers', protect, adminOnly, getCreditTransfers);

/**
 * @swagger
 * /admin/payments:
 *   get:
 *     summary: Get all payment logs (Stripe & Coinbase)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of payment logs
 */
router.get('/payments', protect, adminOnly, getPaymentLogs);

/**
 * @swagger
 * /admin/stats/overview:
 *   get:
 *     summary: Get overview of stats like total users, revenue, etc.
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Overview statistics
 */
router.get('/stats/overview', protect, adminOnly, getOverviewStats);

/**
 * @swagger
 * /admin/stats/daily-topups:
 *   get:
 *     summary: Get daily top-up volume graph data
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daily top-up stats
 */
router.get('/stats/daily-topups', protect, adminOnly, getDailyTopups);

/**
 * @swagger
 * /admin/stats/daily-payments:
 *   get:
 *     summary: Get daily payment volume graph data
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daily payment stats
 */
router.get('/stats/daily-payments', protect, adminOnly, getDailyPayments);

export default router;
