const express = require('express')
const cardRouter = require('./routes/card.routes')
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use('/api', cardRouter)
app.listen(PORT, () => console.log(`server started on port ${PORT}`))