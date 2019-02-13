require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const controller = require("./controller.js");
// const path = require('path');

const app = express();
app.use(express.static(`${__dirname}/../../build`));

app.use(bodyParser.json());


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => {
    console.log(`The magic is happening on port ${SERVER_PORT}`);
  });
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.get("/api/containers", controller.getContainers)
app.get("/api/containers/:product_category", controller.getContainersByCat)
app.get("/api/containers/:product_category/:id", controller.getContainersById)

app.get("/api/plants", controller.getPlants);
app.get("/api/plants/:product_category", controller.getPlantsByCat);
app.get("/api/plants/:product_category/:id", controller.getPlantById);

app.get("/api/design", controller.getDesign);
app.get("/api/design/:product_category", controller.getDesignByCat);
app.get("/api/design/:product_category/:id", controller.getDesignByCat)

app.post("/api/plants/:product_category", controller.addPlant);

// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });
