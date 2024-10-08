const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let data = {
	'customers' : []
}

app.get('/customers', (req, res) => {
	res.json(data)
})

app.post('/customers', (req, res) => {
	const newCustomer = req.body
	newCustomer.id = data.customers.length

	data.customers.push(newCustomer)
	res.status(201).json({"new_customer_id": newCustomer.id})
})

app.get('/customers/:id', (req, res) => {
    let idUser = parseInt(req.params.id)
    let customer = data.customers.find(user => user.id === idUser)
    
    if (customer) {
        res.json(customer)
    } else {
        res.status(404).json({ message: 'Customer not found' })
    }
})

app.put('/customers/:id', (req, res) => {
    let idUser = parseInt(req.params.id)
    let index = data.customers.findIndex(user => user.id === idUser)

    if (index !== -1) {
        data.customers[index] = { ...data.customers[index], ...req.body } 
        res.json({ message: 'Customer updated successfully', customer: data.customers[index] })
    } else {
        res.status(404).json({ message: 'Customer not found' })
    }
})

app.delete('/customers/:id', (req, res) => {
    let idUser = parseInt(req.params.id)
    let index = data.customers.findIndex(user => user.id === idUser)

    if (index !== -1) {
        let removedCustomer = data.customers.splice(index, 1)
        res.json({ message: 'Customer deleted successfully', removedCustomer: removedCustomer[0] })
    } else {
        res.status(404).json({ message: 'Customer not found' })
    }
})

app.listen(port, () => {
  console.log('Example app listening on port: ' + port)
})