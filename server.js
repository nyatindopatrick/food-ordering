import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import config from './config/keys';
import menuRoute from './routes/menu';
import orderRoute from './routes/order';

const { port, mongoURI } = config;

const app = express();

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use('/menu', menuRoute);
app.use('/orders', orderRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));
