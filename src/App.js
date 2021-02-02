import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/navBar';
import Home from './components/home/home';
import Menu from './components/menu';

import { store } from './store';
import { initialize } from './store/init.actions';
import BasketContainer from './components/shopBasket/basketContainer';

class App extends Component 
{
  componentDidMount()
  {
    store.dispatch(initialize());
  }

  render ()
  {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/menu/:name?" render={(props) => (<Menu {...props} key={Math.random()}/>)}/>
            <Route path="/basket" component={BasketContainer}/>
            
            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  };
}

export default App;
