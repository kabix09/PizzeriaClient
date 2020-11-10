import React, {Component} from 'react';
import Home from './components/home/home';
import NavBar from './components/navBar';
import Pizzas from './components/pizzas/pizzas';
import Ingredients from './components/ingredients/ingredients';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

class App extends Component 
{
  render ()
  {
    return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pizza" component={Pizzas}/>
          <Route path="/ingredient" component={Ingredients}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );};
}

export default App;
