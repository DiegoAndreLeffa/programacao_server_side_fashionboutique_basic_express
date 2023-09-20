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
	data.customers.push(req.body)
	res.sendStatus(201)
})

app.listen(port, () => {
  console.log('Example app listening on port: ' + port)
})