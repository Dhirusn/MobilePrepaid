import express from 'express';
import { transferCredits } from '../controllers/transferController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Credit Transfers
 *   description: API for user-to-user credit transfers
 */

/**
 * @swagger
 * /transfer:
 *   post:
 *     summary: Transfer credits to another user
 *     tags: [Credit Transfers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - recipientId
 *               - amount
 *             properties:
 *               recipientId:
 *                 type: string
 *                 example: "64d7bfae02b8cf001f4e6c1a"
 *               amount:
 *                 type: number
 *                 example: 25.5
 *     responses:
 *       200:
 *         description: Credit transfer successful
 *       400:
 *         description: Invalid input or insufficient balance
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Recipient not found
 *       500:
 *         description: Internal server error
 */
router.post('/transfer', protect, transferCredits);

export default router;
