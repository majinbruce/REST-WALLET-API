import mongoose from "mongoose";

const txSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default mongoose.model("Transaction", txSchema);
