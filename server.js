const express = require('express');
const app = express();
const fs = require('fs');

const inventory = require('./window/storage');
const sensory = require('./window/sense');
const stats = require('./window/stats');
const skill = require('./window/skills');
const creatCircle = require('./window/circles');
const secondClass = require('./window/secondcls');
const combat = require('./window/combat');
const exploration = require('./window/explore');
const dueling = require('./window/duel');
const ranking = require('./window/ranks');


//Different Routes in the server
app.get('/', (req, res) => res.send('<h1>System Okay - Home</h1>'));

app.get('/Inventory/', (req, res) => {res.send(inventory) });

app.get('/Sense-Perception/', (req, res) => {res.send(sensory) });

app.get('/Stats/', (req, res) => {res.send(stats) });

app.get('/Skills/', (req, res) => {res.send(skill) });

app.get('/Creative-Circles/', (req, res) => {res.send(creatCircle) });

app.get('/Secondary-Class/', (req, res) => {res.send(secondClass) });

app.get('/Combat/', (req, res) => {res.send(combat)});

app.get('/Exploration/', (req, res) => {res.send(exploration) });

app.get('/Duels/', (req, res) => {res.send(dueling) });

app.get('/Rankings/', (req, res) => {res.send(ranking) });











app.listen(3000, () => {
    console.log('Tuned to port 3000.')
});