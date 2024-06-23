const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port } = require('../src/configs/var');
const mongoose = require('../src/orm/mongoose');
const routes = require('../src/infrastructure/interface/routes');

mongoose.mongooseConnect();

const app = express();

app.use(express.json());

app.use(cors());

routes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app;