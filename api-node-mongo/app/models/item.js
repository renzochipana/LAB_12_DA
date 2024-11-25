const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    description: String
});

module.exports = mongoose.model('Item', ItemSchema);

