import * as React from 'react'
import {Links, Link, Scripts, Outlet} from 'remix'

function App() {
  return (
    <html>
      <head>
        <title>My First Remix App</title>
        <Links />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/jokes">Jokes</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}

export default App
