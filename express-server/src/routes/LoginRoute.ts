import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();

function requiredAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return
  }
  res.status(403);
  res.send("Not permitted");
}

// router.get("/login", (req: RequestWithBody, res: Response) => {
//   res.send(`
//     <form name='login' method='post'>
//       <h1>Login</h1>
//       <div>
//         <label>Email:</label>
//         <input name='email' />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input name='password' type='password' />
//       </div>
//       <button type='submit'>Submit</button>
//     </form>
//   `);
// })

// router.post('/login', (req: RequestWithBody, res: Response) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     res.send("Email or password is required");
//     return;
//   }

//   if (email === 'user1@mail.com' && password === 'test@123') {
//     req.session = { loggedIn: true };
//     res.redirect("/");
//   } else {
//     res.send("Invalid email or password");
//   }
// });

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        You are logged in
        <a href='/logout'>Sign out</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        Unauthoried
        <a href='/login'>Sign out</a>
      </div>
    `);
  }
})

// router.get('/logout', (req: Request, res: Response) => {
//   req.session = undefined;
//   res.redirect("/");
// });

router.get("/protected", requiredAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected page");
});

export { router }