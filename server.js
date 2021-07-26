const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;

// Dev logging middleware
app.use(logger);

if (environment === 'development') {
  app.use(morgan('dev'));
}

// Routes
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(port, () => {
  console.log(`Server running in ${environment} mode on port : ${port}`);
});
