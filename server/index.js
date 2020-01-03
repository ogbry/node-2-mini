const express = require('express')
const bc = require('./controllers/booksController.js')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../build'));
const port = 3001;

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books', bc.update);

app.listen(port, () => {
	console.log(`Server is listening to port ${port}`)
})
