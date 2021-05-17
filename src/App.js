import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    NavLink,
    // Redirect,
    useRouteMatch,
    useParams,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <NavLink to="/"
                      /* activeClassName="selected" */
                         activeStyle={{
                             fontWeight: "bold",
                             color: "red"
                         }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                         activeStyle={{
                             fontWeight: "bold",
                             color: "red"
                         }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/topics"
                         activeStyle={{
                             fontWeight: "bold",
                             color: "red"
                         }}
                >
                  Topics
                </NavLink>
              </li>
            </ul>

            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/topics">
                <Topics />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

const NotFound = () => {
    return <h2>404 Not Found</h2>;
};

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
          <h2>Topics</h2>

          <ul>
            <li>
              <NavLink to={`${match.url}/components`}>Components</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/props-v-state`}>
                Props v. State
              </NavLink>
            </li>
          </ul>

          {/* The Topics page has its own <Switch> with more routes
             that build on the /topics URL path. You can think of the
             2nd <Route> here as an "index" page for all topics, or
             the page that is shown when no topic is selected */}
          <Switch>
            <Route path={`${match.path}/:topicId`}>
              <Topic />
            </Route>
            <Route path={match.path}>
              <h3>Please select a topic.</h3>
            </Route>
          </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
