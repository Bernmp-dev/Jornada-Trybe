import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';
import Home from '../pages/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/welcome" component={ Welcome } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
