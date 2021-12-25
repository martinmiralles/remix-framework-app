import { Outlet, LiveReload, Link, Links, Meta, useLoaderData } from "remix";
import globalStylesUrl from "~/styles/global.css";
import { getUser } from "~/utils/session.server";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];
export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

export const loader = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    user,
  };
  return data;
};

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </Document>
  );
};

// The function below takes an argument of 'children', because we want to wrap it around something
const Document = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <Meta></Meta>
        <Links></Links>
        <title>{title ? title : "Re-re-remix Blog"}</title>
      </head>
      <body>
        {children}
        {/* For Live Reloading, add the line below */}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};

const Layout = ({ children }) => {
  const { user } = useLoaderData();

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>

        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          {user ? (
            <li>
              <form action="/auth/logout" method="POST">
                <button className="btn" type="submit">
                  Logout{" "}
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                </button>
              </form>
            </li>
          ) : (
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
};

export const ErrorBoundary = ({ error }) => {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
};

export default App;
