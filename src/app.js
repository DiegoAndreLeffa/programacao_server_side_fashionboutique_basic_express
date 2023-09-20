const express = require('express')
const app = express()
const port = 3000

// Importante para converter os dados que chegam no POST para JSON. Sem isso o body da requisição não aparece
app.use(express.json());

let data = {
	'customers' : []
}

app.get('/customers', (req, res) => {
	res.json(data)
})

app.post('/customers', (req, res) => {
	
	// Normalmente, estes dados são eviados ao banco de dados, que nos retorna um ID
	// Vamos simular isso atribuindo ao ID o INDEX que o item terá no array
	
	let newCustomer = req.body
	newCustomer.id = data.customers.length

	data.customers.push(newCustomer)
	res.status(201).json({"new_customer_id": newCustomer.id})
})

app.listen(port, () => {
  console.log('Example app listening on port: ' + port)
})