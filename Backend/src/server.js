const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");

const { mongoose } = require('./db_connection')
const employeeController = require('./controllers/employee.controller');

var app = express()
app.use(bodyParser.json())
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, () => console.log('Server Started at Port: 3000'))

app.use('/employees', employeeController)