const express = require("express");
const app = express();
var cors = require('cors')

const products = require('./products.json');

app.use(cors())

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.listen(3000, () => {
    console.log("Server Started at Port 3000");
});

app.get("/products", (req, res) => {
    res.send(products);
});