"use strict";
/*global __dirname*/


// SETUP


const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port = 7000;
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));



http.listen(port, function () {
    console.log('listening on', port);
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});
app.get('/', function getBase(req, res, next) {
    console.log('you came home');
    // res.sendFile(path.join(__dirname, 'index.html'));
    next(new Error('sucks'));
});

app.get('/get', function myGet(req, res) {
    console.log('you got!');
    res.json('you got get')
});
