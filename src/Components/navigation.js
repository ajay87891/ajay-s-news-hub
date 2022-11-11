import React, { Component } from "react";
// import PropTypes from 'prop-types'
// import { Navbar } from "flowbite-react";
import icon from "../icons/News.svg";
import icondark from "../icons/NewsDark.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      dark: true,
      expand: false,
    };
  }
  activeLink =
    "block py-2 pr-4 pl-3  rounded  md:p-0 md:bg-transparent text-white bg-blue-700 md:text-blue-700 dark:text-white";
  inactiveLink =
    " block py-2 pr-4 pl-3 md:p-0 ease-linear duration-500 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ";
  // const activeString = `"md:bg-transparent","text-white","bg-blue-700","md:text-blue-700","dark:text-white"`
  changeTheme = () => {
    if (this.state.dark) {
      document.body.classList.add("dark");
      this.setState({
        dark: false,
      });

      document.body.classList.add("bg-slate-800");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.remove("bg-slate-800");
      this.setState({
        dark: true,
      });
    }
  };
  handelNavbutton = () => {
    // let btn = document.getElementById("expand");
    let btn = document.querySelector("#expand");

    if (this.state.expand) {
      btn.classList.add("hidden");

      this.setState({
        expand: false,
      });
    } else {
      btn.classList.remove("hidden");
      // setExpand(true)
      this.setState({
        expand: true,
      });
    }
  };
  dismissNavLink = () => {
    // let btn = document.getElementById("expand");
    let btn = document.querySelector("#expand");
    btn.classList.add("hidden");
    this.setState({
      expand: false,
    });
  };

  render() {
    return (
      <div>
        {/* <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <span>
            <img
              src={icon}
              className="mr-3 h-6 sm:h-9 dark:hidden"
              alt="News Logo"
            /></span>
            <span>
            <img
              src={icondark}
              className="hidden mr-3 h-6 sm:h-9 dark:inline"
              alt="News Logo"
            /></span>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Ajay's News Hub
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            
            <Navbar.Link href="/">business</Navbar.Link>
            <Navbar.Link href="/">entertainment</Navbar.Link>
            <Navbar.Link href="/">general</Navbar.Link>
            <Navbar.Link href="/">health</Navbar.Link>
            <Navbar.Link href="/">science</Navbar.Link>
            <Navbar.Link href="/">sports</Navbar.Link>
            <Navbar.Link href="/">technology</Navbar.Link>
            <Navbar.Link href="/">About</Navbar.Link>
            <button
          onClick={this.changeTheme}
          className="inline-flex items-start mx-1 mt-2 md:items-center md:my-auto "
          type="button"
        >
          <span className="hidden dark:inline  ease-linear duration-500">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-sky-400/20"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-sky-500"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-sky-500"
              ></path>
            </svg>
          </span>
          <span className="dark:hidden">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className="fill-blue-400/20 stroke-blue-700"
              ></path>
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className="stroke-blue-700"
              ></path>
            </svg>
          </span>
        </button>
          </Navbar.Collapse>
          
        </Navbar> */}
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  ease-linear duration-500 ">
          <div className="flex">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <Link to="/" className="flex items-center">
                <span>
                  <img
                    src={icon}
                    className="mr-3 h-6 sm:h-9 dark:hidden"
                    alt="News Logo"
                  />
                </span>
                <span>
                  <img
                    src={icondark}
                    className="hidden mr-3 h-6 sm:h-9 dark:inline"
                    alt="News Logo"
                  />
                </span>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Ajay's News Hub
                </span>
              </Link>
              <button
                onClick={this.handelNavbutton}
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  ease-linear duration-500"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div className="hidden w-full md:block md:w-auto" id="expand">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  ease-linear duration-500">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      aria-current="page"
                      onClick={this.dismissNavLink}
                    >
                      Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                      to="/entertainment"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      aria-current="page"
                      onClick={this.dismissNavLink}
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/science"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      onClick={this.dismissNavLink}
                    >
                      Science
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/business"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      onClick={this.dismissNavLink}
                    >
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/health"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      onClick={this.dismissNavLink}
                    >
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/sports"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      onClick={this.dismissNavLink}
                    >
                      Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/technology"
                      className={({ isActive }) =>
                        isActive ? this.activeLink : this.inactiveLink
                      }
                      onClick={this.dismissNavLink}
                    >
                      Technology
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={this.changeTheme}
              className="inline-flex items-start mx-1 mt-2 md:items-center md:my-auto "
              type="button"
            >
              <span className="hidden dark:inline  ease-linear duration-500">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-sky-400/20"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className="fill-sky-500"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className="fill-sky-500"
                  ></path>
                </svg>
              </span>
              <span className="dark:hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className="fill-blue-400/20 stroke-blue-700"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className="stroke-blue-700"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
