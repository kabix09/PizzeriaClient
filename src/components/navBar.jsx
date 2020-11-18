import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component
{
    state = {
        link: ['menu', 'koszyk']    
    }

    render()
    {
        return(
            <nav>
                <ul>
                    {this.state.link.map(
                        element => <Link to={"/" + element} key={Math.random()}>
                                        <li>{element}</li>
                                    </Link>
                    )}
                </ul>
            </nav>
        );
    }
    //{`${element}`}
}

export default NavBar;