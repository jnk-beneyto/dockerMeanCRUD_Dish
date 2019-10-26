const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a Schema

const newDish = new Schema({
    name : String,
    description : String,
    type : String 
})

module.exports = mongoose.model('dish',newDish);