import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import Overlay from 'components/Overlay';
// import Welcome from 'components/Welcome';
// import Form from 'components/Form';
import Navigation from 'components/Navigation/Navigation';

import routes from 'constants/routes';

import { tasks } from 'reducers/tasks';

import 'styles/style.css';

const reducer = combineReducers({ tasks: tasks.reducer });
const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route
            exact
            path="/"
          >
            <Overlay />
            <Welcome />
            <Form />
          </Route> */}
          {routes.map(item => (
            <Route
              key={item.value}
              path={item.path}
              component={item.component}
            />
          ))}
          <Redirect
            to="/quotes"
          />
        </Switch>
        <Navigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
