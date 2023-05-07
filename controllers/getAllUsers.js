const User = require("../models/users");


const getAllUsers = async (req,res)=>{
    const users= await User.find({});

    res.json({
        success:true,
        users
    })
}

module.exports = getAllUsers