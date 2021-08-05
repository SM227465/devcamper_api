const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;

// Connect to DB
connectDB();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
app.use(logger);

// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

if (environment === 'development') {
  app.use(morgan('dev'));
}

// Routes
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

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
