const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type : String,
        required : true,
    },
    userName: {
        type : String,
        required: true
    },
    role : {
        type : String,
        required : true
    },
    // password: {
    //     type : String,
    //     required : true
    // },
    title: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('bloguser', userSchema);