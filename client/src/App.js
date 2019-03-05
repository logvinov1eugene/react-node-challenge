import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import Template from './components/template/Template';
import Loader from './components/loader/Loader';
import UserList from './containers/UserList';
import UserPage from './containers/UserPage';

export const browserHistory = createHistory();
export const store = createStore(reducer, applyMiddleware(thunk));

const renderPage = (component) => {
  return (
    <Template>
      {component}
      <Loader />
    </Template>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route
            path="/:id"
            render={() => renderPage(<UserPage />)}
          />

          <Route
            path="/"
            render={() => renderPage(<UserList />)}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
