import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Component } from "react";
export default class App extends Component{
  pgsize=6;
  render(){
    return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/business" element={<News key = "business" pageSize={this.pgsize} country="us" category="business"/>}/>
          <Route exact path="/health" element={<News key = "health" pageSize={this.pgsize} country="us" category="health"/>}/>
          <Route exact path="/sports" element={<News key = "sports" pageSize={this.pgsize} country="us" category="sports"/>}/>
          <Route exact path="/entertainment" element={<News key = "entertainment" pageSize={this.pgsize} country="us" category="entertainment"/>}/>
          <Route exact path="/" element={<News key = "general" pageSize={this.pgsize} country="us" category="general"/>}/>
          <Route exact path="/science" element={<News key = "science" pageSize={this.pgsize} country="us" category="science"/>}/>
          <Route exact path="/technology" element={<News key = "technology" pageSize={this.pgsize} country="us" category="technology"/>}/>
        </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );}
}
