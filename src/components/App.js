import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Navigation from 'components/Navigation';

import routes from 'constants/routes';

import { tasks } from 'reducers/tasks';
import { feeding } from 'reducers/feeding';
import { quotes } from 'reducers/quotes';

import 'styles/style.css';

const reducer = combineReducers({
  tasks: tasks.reducer,
  feeding: feeding.reducer,
  quotes: quotes.reducer,
});
const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
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
