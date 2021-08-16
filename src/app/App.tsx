import React from 'react';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import styles from './App.module.css';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
