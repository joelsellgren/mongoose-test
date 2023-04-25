require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("MDB Connected..."))
.catch(err => console.log(err))

const app = express()
app.use(bodyParser.json)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}/`);
})