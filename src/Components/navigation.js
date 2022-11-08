import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Navbar } from "flowbite-react";
import icon from '../icons/News.svg';

export class Navigation extends Component {
  //   static propTypes = {

  //   }

  render() {
    return (
      <div>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src={icon}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Ajay's News Hub
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
