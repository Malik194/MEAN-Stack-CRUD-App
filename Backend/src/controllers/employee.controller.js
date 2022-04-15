const express = require('express')
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee.model')

// => localhost:3000/employees/list
router.get('/list', (req, res) => {
  Employee.find((err, docs) => {
    if (!err) res.send(docs)
    else console.log('Error in Retriving Employees: ', JSON.stringify(err, undefined, 2))
  })
})

// => localhost:3000/employees/:id
router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with Given Id: , ${req.params.id}`)

  Employee.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('Error in Retriving Employees: ', JSON.stringify(err, undefined, 2))
  })
})

// => localhost:3000/employees/insert
router.post('/insert', (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  })

  emp.save((err, doc) => {
    if (!err) res.send(doc)
    else console.log('Error in Employee Save: ', JSON.stringify(err, undefined, 2))
  })
})

// => localhost:3000/employees/update/:id
router.put('/update/:id', (req, res) => {
  var emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  }
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with Given Id: , ${req.params.id}`)

  Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
    if (!err) res.send(doc)
    else console.log('Error in Employee Update: ', JSON.stringify(err, undefined, 2))
  })
})

// => localhost:3000/employees/delete/:id
router.delete('/delete/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with Given Id: , ${req.params.id}`)

  Employee.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs)
    else console.log('Error in Employee Delete: ', JSON.stringify(err, undefined, 2))
  })
})


module.exports = router