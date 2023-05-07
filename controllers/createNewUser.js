const User = require("../models/users")
const bcrypt = require("bcrypt")


const createNewUser = async(req,res)=>{
    console.log(req.body.name)
    const {name,email,password} = req.body

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password,salt)

    await User.create({
        name,
        email,
        password: hashedPassword
    })
    res.status(201).cookie("temp","cookie").json({
        success:true,
        message: "Registered Successfully"
    })
}

module.exports = createNewUser;