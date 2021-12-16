import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
// import { FaBars } from 'react-icons/fa';
// import { CgClose } from 'react-icons/cg';
import { Button } from '../NavbarButtons/Button';

class Navbar extends Component {
  state = { clicked: false };

  //  eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked }); // set click to the opposit value, whenever you click it
  };

  render(): JSX.Element {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          BodyTrack<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="FaBars">...</i>
          {/* {<i className={this.state.clicked ? 'CgClose' : 'FaBars'}></i>} */}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;
