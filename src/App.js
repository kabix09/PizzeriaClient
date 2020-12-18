import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/navBar';
import Home from './components/home/home';
import Menu from './components/menu';

import { store } from './store';
import { initLabel } from './store/data/label/label.actions';
import BasketContainer from './components/shopBasket/basketContainer';

class App extends Component 
{
  constructor(){
    super();
  }

  componentDidMount()
  {
    store.dispatch(initLabel());
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
            <Route path="/koszyk" component={BasketContainer}/>
            
            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  };
}
/* render={(props )=> (<Menu {...props} key={Math.random()}/>)} -> render nowego klucza zmusza do odświerzenia... */
export default App;
