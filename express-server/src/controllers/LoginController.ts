import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request make");
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form name='login' method='post'>
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input name='email' />
        </div>
        <div>
          <label>Password:</label>
          <input name='password' type='password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    `);
  }
}
