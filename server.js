const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require('./controllers/users');
//create socket , open (tcp,http connection)
const server = express();

//enable cross site requests
server.use(cors());

//added security headers
server.use(helmet());

//logging
server.use(morgan('dev'));

//routing middleware here
server.use('/users',userRoutes);

module.exports = server;


