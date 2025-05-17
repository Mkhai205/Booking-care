import express from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';
import initWebRoutes from './routes/web.js';
import configViewEngine from './config/viewEngine.js';


const app = express();

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);

// Init web routes
initWebRoutes(app);

const PORT = process.env.PORT || 6996;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});