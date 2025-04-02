const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogId : {
        type : Number,
        require : true
    },
    blogTitle : {
        type : String , 
        require : true
    },
    content : {
        type : String,
        require : true
    },
    // date : {
    //     type : Date.now()
    // }
})

module.exports = mongoose.model('userBlogs', blogSchema);