const express = require ('express')
const connectToDatabase = require('./database')
const app = express()






connectToDatabase()
app.get("/",(req,res)=>{
    res.json({
        "message" : "Sucess"
    })
})

app.listen(3000, ()=> {
    console.log("Nodejs server has started at port 3000");
})



