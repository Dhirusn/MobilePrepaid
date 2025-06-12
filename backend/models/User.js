import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: String,
  balance: {
    type: Number,
    default: 0
  },
});


export default mongoose.model('User', userSchema);
