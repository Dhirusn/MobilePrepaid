import User from '../models/User.js';
import Transfer from '../models/Transfer.js';

export const handleCreditTransfer = async (fromUserId, toEmail, amount) => {
  if (!toEmail || !amount || amount <= 0) throw new Error('Invalid transfer details');

  const sender = await User.findById(fromUserId);
  const recipient = await User.findOne({ email: toEmail });

  if (!sender) throw new Error('Sender not found');
  if (!recipient) throw new Error('Recipient not found');
  if (sender.credits < amount) throw new Error('Insufficient balance');

  sender.credits -= amount;
  recipient.credits += amount;

  await sender.save();
  await recipient.save();

  const transfer = await Transfer.create({
    fromUser: sender._id,
    toUser: recipient._id,
    amount
  });

  return transfer;
};
