const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 8000;
const environment = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Server running in ${environment} mode on port : ${port}`);
});
