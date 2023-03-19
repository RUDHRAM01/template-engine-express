const express = require('express')

const app = express()

const portNo = 8000

app.set("view engine" ,"hbs")

app.get("/", (req, res) => {
    res.render("index", {
        name : "rudhram"
    })
})


app.listen(portNo, "127.0.0.1", () => {
    console.log("server is running at the port no: ",portNo)
})