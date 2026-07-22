import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Component } from "react";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component{
  pgsize=6;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    //This has to be arrow function or it just won't run.
    this.setState({progress:progress})
  }
  render(){
    return (
    <div className="App">
      <Router>
        <Navbar/>
        <LoadingBar color="#f11945" progress={this.state.progress} onLoaderFinished={()=>this.setProgress(100)}></LoadingBar>
        <Routes>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  key = "business" pageSize={this.pgsize} country="us" category="business"/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress}  key = "health" pageSize={this.pgsize} country="us" category="health"/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  key = "sports" pageSize={this.pgsize} country="us" category="sports"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key = "entertainment" pageSize={this.pgsize} country="us" category="entertainment"/>}/>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key = "general" pageSize={this.pgsize} country="us" category="general"/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress}  key = "science" pageSize={this.pgsize} country="us" category="science"/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  key = "technology" pageSize={this.pgsize} country="us" category="technology"/>}/>
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
