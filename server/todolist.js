var express = require('express'),
	bodyParser = require('body-parser'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;


var app = express();

app.use(function(req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
        if (req.method === 'OPTIONS') return res.send(200)
    }
    next();
});

app.use(bodyParser.json());
mongoose.connect('mongodb://todolist:1234@ds049130.mongolab.com:49130/todolist');

var TodoSchema = mongoose.Schema({
	task: String,
	doing: Boolean,
	done: Boolean,
});

var TodoResource = restful.model('todo', TodoSchema);
TodoResource.methods(['get', 'post', 'put', 'delete']);
TodoResource.register(app, '/api/todos');

app.listen(process.env.PORT || 3000);
console.log('Server running');