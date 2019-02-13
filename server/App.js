const port = 3000;
const url = require('url');
const path = require('path');
const http = require('http');
const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');



// API Request
const Users = require('./Models/Users')(Request);
const Coins = require('./Models/Coins')(Request);
const Trading = require('./Models/Trading')(Request);
const Purchase = require('./Models/Purchase')(Request);
const Transactions = require('./Models/Transactions')(Request);
const Authentication = require('./Models/Authentication')(Request);



const app = express();


// app.use(express.static(path.join(path.dirname(__dirname), '/build/')));


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




//app.get('/', function(req, res) {

//   res.sendFile(path.join(path.dirname(__dirname), '/build/index.html'));
//});



app.post('/post', function(req, res) {

	req.on('data', (data) => {

		res.end(JSON.parse(data));

	});
});



app.post('/app', function(req, res) {

    const parse = url.parse(req.url, true);

    req.on('data', (data) => {

        switch(parse.query.type) {


            // Coin
            case 'coin':
                Coins.send(JSON.parse(data), res);
            break;

            case 'notify':
                Coins.notify(JSON.parse(data), res);
            break;


            // Trading
            case 'buy':
                Trading.buy(JSON.parse(data), res);
            break;

            case 'sell':
                Trading.sell(JSON.parse(data), res);
            break;


            // Users
            case 'user':
                Users.user(JSON.parse(data), res);
            break;

            // Authentication
            case 'login':
                Authentication.login(JSON.parse(data), res);
            break;

            case 'signup':
                Authentication.signup(JSON.parse(data), res);
            break;


            // Purchase
            case 'card':
                Purchase.card(JSON.parse(data), res);
            break;

            case 'charge':
                Purchase.charge(JSON.parse(data), res);
            break;

            case 'update':
                Purchase.update(JSON.parse(data), res);
            break;

            case 'retrieve':
                Purchase.retrieve(JSON.parse(data), res);
            break;

            case 'customer':
                Purchase.customer(JSON.parse(data), res);
            break;


            // Transactions
            case 'senddime':
                Transactions.senddime(JSON.parse(data), res);
            break;

            case 'transactions':
                Transactions.transactions(JSON.parse(data), res);
            break;
        }
    });

});




Trading.watch(socket.listen(http.createServer(app).listen(port, () => console.log('Express server listening on port ' + port))));
