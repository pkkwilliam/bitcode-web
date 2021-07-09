import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTopRoute from "./ScrollToTopRoute";

import BitCodeWebAppState from "./appState/contextProvider";

const HomeHosting = React.lazy(() => import("./Pages/HomeHosting"));
const NotFound = React.lazy(() => import("./Pages/404"));

class App extends BitCodeWebAppState {
  render() {
    return (
      <Suspense fallback={<p>loading</p>}>
        <this.AppStateWrapper>
          <Router>
            <Switch>
              <ScrollToTopRoute
                exact={true}
                path={"/"}
                component={HomeHosting}
              />
              <ScrollToTopRoute component={NotFound} />
            </Switch>
          </Router>
        </this.AppStateWrapper>
      </Suspense>
    );
  }
}

export default App;
