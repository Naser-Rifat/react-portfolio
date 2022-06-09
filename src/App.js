import './App.css';
import "./App.scss"
import Home from './components/Home/Home'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { Contactme } from './components/ContactForm/Contactme';
import Details from './components/Details';
import Menubar from './components/Menubar/Menubar';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/contact">
            <Contactme></Contactme>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>


      </Router>

    </div>
  );
}

export default App;
