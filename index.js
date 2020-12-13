
var express = require('express'),
    app = express(),
    cors  = require('cors'),
    bodyParser = require('body-parser'),
    swaggerUi = require('swagger-ui-express'),
    routes = require('./app/routes/index'),
    swaggerDocument = require('./swagger.json');

require('dotenv').config();
require('./config/database').db;

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json({limit: '2gb'}));
app.use(bodyParser.urlencoded({limit: '2gb', extended: true}));

app.get('/',(req, res) => { res.send('Welcome to sample APIs') });

// Get API Version from .env (or else assume 1.0)
const baseUrl = `/new_api/v1`;

// mount all routes on /api path
app.use(`${baseUrl}`, routes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create a Server
app.listen(process.env.PORT, () =>
    console.log("Express server is runing at port no : " + process.env.PORT)
);

module.exports = app;