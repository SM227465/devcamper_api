const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;

// Connect to DB
connectDB();

// Body parser
app.use(express.json());

// Dev logging middleware
app.use(logger);

if (environment === 'development') {
  app.use(morgan('dev'));
}

// Routes
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(port, () => {
  console.log(
    `Server running in ${environment} mode on port : ${port}`.yellow.bold
  );
});

// Handle unhandle promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error : ${err.message}`.red);

  // close server & exit process
  server.close(() => process.exit(1));
});
