let books = [];
let id = 0;

module.exports = {
	read: (req, res) => {
		if(books.length <= 0){
			res.end("NO DATA")
		}
		else{
			res.status(200).send(books)
		}
		
	},

	create: (req, res) => {
		const { title, author} = req.body
		const findItem = books.filter(item => { return item.title === req.body.title})
		console.log(findItem)
		let book = {
			id, title, author
		};
		if(findItem.length > 0){
			res.status(409).send({Error: 'This book already exist', Item: findItem})
		}
		else if(req.body.title == ''){
			res.status(204).send({Error: 'Cannot post empty body'})
		}
		else{
			books.push(book)
			id++;
			res.status(200).send(books)
		}
	},
	update: (req, res) => {
		console.log('Update')
	}
};
