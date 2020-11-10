import React, {Component} from 'react';
import Pizzas from './components/pizzas';

class App extends Component 
{
  render ()
  {
    return (
    <React.Fragment>
          <h1 style={{textAlign: 'center'}}>Pizza menu:</h1>
          <Pizzas/>
    </React.Fragment>
  );};
}

export default App;
