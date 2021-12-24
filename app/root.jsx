import { Outlet, LiveReload, Link } from "remix";
import globalStylesUrl from '~/styles/global.css'

 const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </Document>
  )
}

// The function below takes an argument of 'children', because we want to wrap it around something
const Document = ({children, title}) => {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : 'Re-re-remix Blog'}</title>
      </head>
      <body>
        {children}
        {/* For Live Reloading, add the line below */}
        {process.env.NODE_ENV === 'development' ? <LiveReload/> : null}
      </body>
    </html>
  )
}

const Layout = ({children}) => {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className='logo'>Remix</Link>

        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}

export default App