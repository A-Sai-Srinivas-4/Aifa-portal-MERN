const mongoose = require('mongoose');

let developers = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('developers', developers)