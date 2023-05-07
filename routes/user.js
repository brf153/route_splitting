const express = require("express");
const getAllUsers = require("../controllers/getAllUsers.js");
const getUsersByID = require("../controllers/getUsersByID.js");
const createNewUser = require("../controllers/createNewUser.js");

const router = express.Router()

router.get("/all",getAllUsers)

router.get("/userid/:id",getUsersByID)

router.post("/new",createNewUser)

    

module.exports = router