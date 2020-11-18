import React, {Component} from 'react';
import Home from './components/home/home';
import NavBar from './components/navBar';
import Menu from './components/menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          <Route path="/menu/:name?" render={(props )=> (<Menu {...props} key={Math.random()}/>)}/>
          <Route path="/koszyk" component={Home}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );};
}
/* render={(props )=> (<Menu {...props} key={Math.random()}/>)} -> render nowego klucza zmusza do odświerzenia... */
export default App;
