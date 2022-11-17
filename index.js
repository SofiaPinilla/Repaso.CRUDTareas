const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 8001
const swaggerUI= require("swagger-ui-express")
const docs = require("./docs/index")
const { dbConnection}=require("./config/config")
app.use(express.json())

app.use("/tasks", require("./routes/tasks"))
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection()

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))