const User = require("../models/users")


const getUsersByID = async (req,res)=>{
    const {id} = req.params

    console.log(req.params)

    const user= await User.findById(id)

    res.json({
        success:true,
        user
    })
}

module.exports = getUsersByID;