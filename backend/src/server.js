const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const initWebRoutes = require('./routes/web');
const configViewEngine = require('./config/viewEngine');
const connectDB = require('./config/connectDB');


const app = express();

// Config view engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);

// Init web routes
initWebRoutes(app);

// Connect to DB
connectDB();

const PORT = process.env.PORT || 6996;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});