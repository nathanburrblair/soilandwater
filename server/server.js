require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');
const controller = require('./controller.js');

const app = express();

app.use(bodyParser.json());

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db => app.set('db', db));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.get('/api/plants', controller.getPlants)
app.get('/api/plants/:product_category', controller.getPlantsByCat)
app.get('/api/plants/:product_category/:id', controller.getPlantById)

app.listen(SERVER_PORT, () => {
    console.log(`The magic is happening on port ${SERVER_PORT}`)
})