const app = require("./app")
const connectDB = require("./data/database.js")


connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is working at 4000")
})
