import "./App.css";
import Navigation from "./Components/navigation";

import React, { useState } from "react";
import News from "./Components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props)=> {
  
  
  // apiKey = process.env.REACT_APP_NEWS_API
  // apiKey= "0f03cebe013543198abee230ab815999"
  const apiKey = "7448d9ab113940f09a93e3c61fa7bfa3"

  const setProgress=(progress)=>{
    setprogress(progress);
  }
  const [progress, setprogress] = useState(0);

  
  
    return (
      <div>
        <Router>
          <Navigation />
          <LoadingBar
          color='#808080'
          progress={progress}
          height={3}
          
        
      />
          <Routes>
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pagesize={props.pagesize} country="in" category="business" />} />
           
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pagesize={props.pagesize} country="in" category="entertainment" />} />
            
            <Route exact path="/" element={
              <News apiKey={apiKey} setProgress={setProgress} key="general" pagesize={props.pagesize} country="in" category="general" />} />
            
            <Route exact path="/health" element={
              <News apiKey={apiKey} setProgress={setProgress} key="health" pagesize={props.pagesize} country="in" category="health" />} />
            
            <Route exact path="/science" element={
              <News apiKey={apiKey} setProgress={setProgress} key="science" pagesize={props.pagesize} country="in" category="science" />} />
            <Route exact path="/sports" element={
              <News apiKey={apiKey} setProgress={setProgress} key="sports" pagesize={props.pagesize} country="in" category="sports" />} />
            <Route exact path="/technology" element={
              <News apiKey={apiKey} setProgress={setProgress} key="technology" pagesize={props.pagesize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
export default App;

App.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "general",
};
App.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};


