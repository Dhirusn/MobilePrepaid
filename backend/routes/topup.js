import express from 'express';
import { protect } from '../middlewares/auth.js';
import {
  initiateTopup,
  getHistory,
  createTopupSession,
  confirmTopup
} from '../controllers/topupController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Top-Up
 *   description: Endpoints for handling top-ups
 */

/**
 * @swagger
 * /topup/initiate:
 *   post:
 *     summary: Initiate a top-up session (generates Stripe/Coinbase session)
 *     tags: [Top-Up]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - countryCode
 *               - operatorId
 *               - amount
 *               - provider
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 example: "+918273645564"
 *               countryCode:
 *                 type: string
 *                 example: "IN"
 *               operatorId:
 *                 type: string
 *                 example: "2342"
 *               amount:
 *                 type: number
 *                 example: 10
 *               provider:
 *                 type: string
 *                 enum: [stripe, coinbase]
 *                 example: "stripe"
 *     responses:
 *       200:
 *         description: Payment session created
 *       400:
 *         description: Bad request
 */
router.post('/initiate', protect, createTopupSession);

/**
 * @swagger
 * /topup/confirm:
 *   post:
 *     summary: Confirm payment and trigger top-up via Reloadly
 *     tags: [Top-Up]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sessionId
 *             properties:
 *               sessionId:
 *                 type: string
 *                 example: "cs_test_123abc..."
 *     responses:
 *       200:
 *         description: Top-up successful
 *       400:
 *         description: Invalid session
 */
router.post('/confirm', protect, confirmTopup);

/**
 * @swagger
 * /topup/history:
 *   get:
 *     summary: Get user’s top-up history
 *     tags: [Top-Up]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of top-up records
 */
router.get('/history', protect, getHistory);

export default router;
