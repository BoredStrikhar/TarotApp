const express = require('express')
const cardRouter = require('./routes/card.routes')
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use('/api', cardRouter)
app.listen(PORT, () => console.log(`server started on port ${PORT}`))