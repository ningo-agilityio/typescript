import express, { Request, Response } from 'express';
import { router } from './LoginRoute';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3001, () => {
  console.log("Listen on port 3000");
})