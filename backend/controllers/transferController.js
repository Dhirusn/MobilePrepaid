import { handleCreditTransfer } from '../services/transferService.js';

export const transferCredits = async (req, res) => {
  const { toEmail, amount } = req.body;
  const fromUserId = req.user.id;

  try {
    const result = await handleCreditTransfer(fromUserId, toEmail, amount);
    res.status(200).json({ message: 'Transfer successful', result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
