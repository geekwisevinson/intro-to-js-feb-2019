"use strict";
/*global __dirname*/


// SETUP


const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser')
const port = 7000;
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

const database = {
    users: [],
};
http.listen(port, function () {
    console.log('listening on', port);
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});
app.get('/', function getBase(req, res, next) {
    console.log('you came home');
    res.json({});
    // next(new Error('sucks'));
});

app.get('/about', function getBase(req, res, next) {
    console.log('you came home');
    res.sendFile(path.join(__dirname, 'public/about.html'));
    // next(new Error('sucks'));
});

app.get('/get', function myGet(req, res) {
    console.log('you got!');
    res.json('you got get')
});

app.post('/post', function myGet(req, res) {
    console.log('you got!', req.body);
    database.users.push(req.body);
    res.json(req.body)
});

app.get('/users', function myGet(req, res) {

    res.json(database);
});