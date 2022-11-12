import "./App.css";
import Navigation from "./Components/navigation";

import React, { Component } from "react";
import News from "./Components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  // apiKey = process.env.REACT_APP_NEWS_API
  apiKey= "0f03cebe013543198abee230ab815999"

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <LoadingBar
          color='#808080'
          progress={this.state.progress}
          height={3}
          
        
      />
          <Routes>
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pagesize={this.props.pagesize} country="in" category="business" />} />
           
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize={this.props.pagesize} country="in" category="entertainment" />} />
            
            <Route exact path="/" element={
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pagesize={this.props.pagesize} country="in" category="general" />} />
            
            <Route exact path="/health" element={
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pagesize={this.props.pagesize} country="in" category="health" />} />
            
            <Route exact path="/science" element={
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pagesize={this.props.pagesize} country="in" category="science" />} />
            <Route exact path="/sports" element={
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pagesize={this.props.pagesize} country="in" category="sports" />} />
            <Route exact path="/technology" element={
              <News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pagesize={this.props.pagesize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
