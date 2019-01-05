const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    age: Number,
    genre: String,
});

module.exports = mongoose.model('Author', authorSchema);