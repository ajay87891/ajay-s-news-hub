import "./App.css";
import Navigation from "./Components/navigation";

import React, { Component } from "react";
import News from "./Components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  // c = 'ajay';
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/business" element={<News key="business" pagesize={9} country="in" category="business" />} />
           
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={9} country="in" category="entertainment" />} />
            
            <Route exact path="/" element={
              <News key="general" pagesize={9} country="in" category="general" />} />
            
            <Route exact path="/health" element={
              <News key="health" pagesize={9} country="in" category="health" />} />
            
            <Route exact path="/science" element={
              <News key="science" pagesize={9} country="in" category="science" />} />
            <Route exact path="/sports" element={
              <News key="sports" pagesize={9} country="in" category="sports" />} />
            <Route exact path="/technology" element={
              <News key="technology" pagesize={9} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
