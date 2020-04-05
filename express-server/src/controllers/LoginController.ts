import { Request, Response, NextFunction } from 'express';
import { get, post, controller, use, bodyValidator } from './decorators'

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request make");
  next();
}

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body;

    if (!email || !password) {
      res.send("Email or password is required");
      return;
    }

    if (email === 'user1@mail.com' && password === 'test@123') {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect("/");
  }
}
