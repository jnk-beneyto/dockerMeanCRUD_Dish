const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./backend/routes/dish.routes');
const path = require ('path');


//port
app.set('port', process.env.PORT || 3000);
//database
app.set('db', process.env.MONGODB_URI || 'mongodb://mongo:27017/myFavouriteDish')

mongoose.Promise = global.Promise;

//start ddbb

mongoose.connect(app.get('db'))
    .then (()=> console.log('dataBase connected'))
    .catch(err => console.log('dataBase is NOT connected' + err));

//middlewares

app.use(bodyParser.urlencoded({extended:false}));
// working through Json 
app.use(bodyParser.json());

//setting Cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes
app.use(routes);
app.use(express.static(path.join(__dirname, 'dist')));

//start server
app.listen(app.get('port'), () => 
    console.log('server running on port ' + app.get('port'))
)