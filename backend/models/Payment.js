import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  currency: { type: String, default: 'USD' },
  provider: { type: String, enum: ['stripe', 'coinbase'] },
  providerPaymentId: String,
  status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
