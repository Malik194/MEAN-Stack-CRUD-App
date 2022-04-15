const express = require("express")
const bodyParser = require("body-parser")

const { mongoose } = require('./db_connection')
const employeeController = require('./controllers/employee.controller');

var app = express()
app.use(bodyParser.json())

app.listen(3000, () => console.log('Server Started at Port: 3000'))

app.use('/employees', employeeController)