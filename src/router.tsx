import { Link, Route } from "wouter";
import App from "./App";
import "./Footer.css";

const FooterItems = (props: { route?: string }): any => {
  return (
    <>
      {[
        { name: "Home", route: "" },
        { name: "About", route: "about" },
        { name: "Works", route: "works" },
      ].map((item) => {
        return (
          <Link href={`/${item.route}`}>
            <h2
              style={{
                textDecoration: props.route == item.route ? "underline" : "",
              }}
            >
              {item.name}
            </h2>
          </Link>
        );
      })}
    </>
  );
};

export default (): JSX.Element => {
  return (
    <>
      <footer>
        <h1>Gifu Kosen Computer Club</h1>
        <Route path="/">
          <FooterItems route="" />
        </Route>
        <Route path="/:route">
          {(params) => <FooterItems route={params.route} />}
        </Route>
      </footer>
      <Route path="/">
        <App />
      </Route>
    </>
  );
};
