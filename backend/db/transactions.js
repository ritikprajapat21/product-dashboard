import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: String,
  price: mongoose.Schema.Types.Decimal128,
  description: String,
  category: String,
  image: String,
  sold: Boolean,
  dateOfSale: Date,
});

export default mongoose.model.Transactions ||
  mongoose.model("Transaction", TransactionSchema);
