const mongoose = require('mongoose');

// creating project schema
const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Author:{
        type: String,
        required: true
    }
})
// modal
const User = mongoose.model('ProjectCreator', projectSchema);


module.exports = User;