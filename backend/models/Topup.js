import mongoose from 'mongoose';

const topupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  phoneNumber: String,
  countryCode: String,
  operatorId: String,
  amount: Number,
  status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
  paymentId: String,
}, { timestamps: true });

export default mongoose.model('Topup', topupSchema);
