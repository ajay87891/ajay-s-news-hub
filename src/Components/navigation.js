import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Navbar } from "flowbite-react";
import icon from '../icons/News.svg';

export class Navigation extends Component {
  // constructor(){
  //   super();
  //   this.state ={
  //     dark: true
  //   }

  // }
  //   static propTypes = {

  //   }
  
  // changeTheme = ()=>{
  //   // let theme = document.getElementById("mainbody");
  //   if(this.state.dark){
  //     // theme.classList.add("dark");
  //     document.body.classList.add('dark');
  //     this.setState({
  //       dark: false
  //     })
  //     // theme.classList.add("bg-slate-800")
  //     document.body.classList.add('bg-slate-800');
     
     
  //   }
  //   else{
  //     // theme.classList.remove("dark");
  //     // theme.classList.remove("bg-slate-800");
  //     document.body.classList.remove('dark');
  //     document.body.classList.remove('bg-slate-800');
  //     this.setState({
  //       dark: true
  //     })
      
     
      
  //   }

  //  }

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
