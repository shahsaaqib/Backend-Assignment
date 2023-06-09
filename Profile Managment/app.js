import express from 'express';
import routes from './routes';
import { connectDB } from './db';

import dotenv from 'dotenv';
dotenv.config();

//Connect to database
connectDB();

const app = express();

app.use(express.json());

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server running on port: ${port} in ${process.env.NODE_ENV} mode`
  );
});
