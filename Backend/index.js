const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {router, verifyAToken} =  require("./routes/routes.js");

const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use router
// app.use(Router);
app.use(router);
app.listen(5000, () => console.log('Server running at http://localhost:5000'));