const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    uri: { type: String },
  },
  thumbnail: {
    uri: { type: String },
  },
  ingredients: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    required: true,
  },
  id: { // Mantemos o ID string original para compatibilidade com o frontend
    type: String,
    required: true,
    unique: true,
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;