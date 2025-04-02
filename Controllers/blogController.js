const Blog = require('../Model/Blog');

exports.getBlog = async ( req , res ) => {
    try {
        const data = await Blog.find();
        return res.json({ error : false, data : data });
    } catch (error) {
        return res.status(400).json({ error : true, message : message.error });
    }
}

exports.postBlog = async( req, res ) => {
    try {
        const newBlog = new Blog(req.body);
        const data = await newBlog.save();
        return res.json({ error : false, data : data });
    } catch (error) {
        return res.status(400).json({ error : true, message : message.error });
    }
}

exports.putBlog = async( req, res ) => {
    try {
        const id = req.params.id;
        const data = await Blog.findByIdAndUpdate(id, req.body , {new : true})
        return res.json({ error : false, message : message.error });
    } catch (error) {
        return res.status(400).json({error : true , message : message.error});
    }
}

exports.deleteBlog = async( req, res ) => {
    try {
        const data = await Blog.findByIdAndDelete(id, req.body , {new : true})
        return res.json({ error : false, message : message.error });
    } catch (error) {
        return res.status(400).json({error : true , message : message.error});
    }
}
