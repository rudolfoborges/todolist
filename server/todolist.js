var express = require('express'),
	bodyParser = require('body-parser'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;


var app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://todolist:todolist2515@ds049130.mongolab.com:49130/todolist');

var TodoSchema = mongoose.Schema({
	task: String,
	doing: Boolean,
	done: Boolean,
});

var TodoResource = restful.model('todo', TodoSchema);
TodoResource.methods(['get', 'post', 'put', 'delete']);
TodoResource.register(app, '/api/todos');

app.listen(3000);
console.log('Server running');