import React, { Component } from 'react';
import { MenuItems} from "./Menuitems"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Imgur</h1>
                <Button>New Post</Button>
                <div className="menu-icon" onClick={this.handleclick}>

                </div>
                <input type="text" className="input" placeholder="Images,#tags,@users oh my!" />
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar