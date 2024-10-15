const User = require("../models/user-module"); // Correctly require the model

// Function to get the list of users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();  // Use the correct `User` model
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.saveUser = async (req,res) =>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(500).json({message:"from not save user","error":err});
    }
}