import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTopRoute from "./ScrollToTopRoute";

import BitCodeWebAppState from "./appState/contextProvider";
import { HOME, CAREER, PHOENIX, PICK_TB } from "./common/routes";

import About from "./Pages/About";
const NotFound = React.lazy(() => import("./Pages/404"));

const ROUTES = [HOME, CAREER, PHOENIX, PICK_TB];

class App extends BitCodeWebAppState {
  render() {
    return (
      <Suspense fallback={<p>loading</p>}>
        <this.AppStateWrapper>
          <Router>
            <Switch>
              {generateScrollToTopRoutes(ROUTES)}
              <ScrollToTopRoute component={NotFound} />
            </Switch>
          </Router>
        </this.AppStateWrapper>
      </Suspense>
    );
  }
}

export function generateScrollToTopRoutes(routes) {
  return routes.map((route) => {
    return (
      <ScrollToTopRoute
        exact={true}
        component={route.component}
        path={route.path}
      />
    );
  });
}

export default App;
