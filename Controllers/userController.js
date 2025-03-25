const User = require('../Model/User');

exports.getUser = async ( req , res ) => {
    try {
        const data =await User.find();
        return res.json({ error :false , data: data });
    } catch (error) {
        return res.status(400).json({error : true , message : error.message }); 
        
    }
}

exports.postUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const data = await newUser.save();
        return res.json({ error: false, data: data });
    } catch (error) {
        return res.status(400).json({ error :true , message : error.message});
    }
}

exports.putUser = async (req , res ) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndUpdate(id, req.body, {new : true});
        return res.json({ error: false, data: data });         
    } catch (error) {
        return res.status(400).json({ error: true, message : error.message });        
    }
}

exports.deleteUser = async (req ,res) => {
    try {
        const data = await User.findByIdAndDelete(req.perams.id);
        return res.json({ error: false, data : data });
    } catch (error) {
        return res.status(400).json({ error: true, message : error.message });
    }
}