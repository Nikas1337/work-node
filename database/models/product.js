const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    weight: Number,
    ribbon: String,
    pictureUri: String
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;