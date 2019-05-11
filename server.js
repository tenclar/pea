const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded( { extended:false } ))


const Usuarios = require('./routes/Usuarios')
app.use('/usuarios', Usuarios)

const Estados = require('./routes/Estados')
app.use('/estados', Estados)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
