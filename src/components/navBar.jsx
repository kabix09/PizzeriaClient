import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { store } from '../store'

class NavBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            link: ['menu', 'koszyk'],
            activeItem: store.getState().label.name
        } 
        console.log(this.state.activeItem);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    /*
        use SUIR's
        https://stackoverflow.com/questions/42081142/semantic-ui-react-how-to-use-link-components-in-menu-list-elements
    */
    render()
    {
        const { activeItem } = this.state;
        return(
            <nav>
                <Menu pointing secondary style={{width: "90%", margin: "auto", fontSize: "1.4rem"}}>
                    {
                        this.state.link.map(
                            element => <Menu.Item
                                            name={element}
                                            
                                            as={Link}
                                            to = {"/" + element}
                                            
                                            key={Math.random()}

                                            active={activeItem === element}
                                            onClick={this.handleItemClick}
                                        />
                        )
                    }
                </Menu>
            </nav>
        );
    }
    //{`${element}`}
}

export default NavBar;