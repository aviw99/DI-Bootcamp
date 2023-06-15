import {  Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';
import Test from "./Test";
import TestClass from "./TestClass";

function AppReview() {
  const linkColor = {
    color:'white'
  }

  return (
    <div className="App">
      <Test a={1} b={2} name='mary'/>
        <TestClass  a={10} b={20} name='steve'/>
        

    </div>
  );
}

export default AppReview;
