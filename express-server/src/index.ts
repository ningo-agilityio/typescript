import express from 'express';
// import { router } from './routes/LoginRoute';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['logged'] }));
// app.use(router);
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log("Listen on port 3001");
})