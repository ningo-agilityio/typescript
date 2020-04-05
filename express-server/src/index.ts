import express, { Request, Response } from 'express';
import { router } from './LoginRoute';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['logged'] }));
app.use(router);

app.listen(3001, () => {
  console.log("Listen on port 3000");
})