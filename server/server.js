require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const controller = require('./controller.js');
var AWS = require('aws-sdk')

const app = express();

app.use(bodyParser.json());

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`The magic is happening on port ${SERVER_PORT}`)
    })
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})

app.get('/api/plants', controller.getPlants)
app.get('/api/plants/:product_category', controller.getPlantsByCat)
app.get('/api/plants/:product_category/:id', controller.getPlantById)
app.post('/api/plants/:product_category', controller.addPlant)
app.get('/api/sign', controller.sign)