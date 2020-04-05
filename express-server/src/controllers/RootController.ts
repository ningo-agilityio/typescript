import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators'

function requiredAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return
  }
  res.status(403);
  res.send("Not permitted");
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        You are logged in
        <a href='/auth/logout'>Sign out</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        Unauthoried
        <a href='/auth/login'>Sign in</a>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requiredAuth)
  getProtected(req: Request, res: Response): void {
    res.send("Welcome to protected page");
  }
}