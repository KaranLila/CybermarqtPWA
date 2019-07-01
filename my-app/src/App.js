import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //Routing is used for switching pages
import {Home} from './Home'; // Imports the home page here from Home
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

// main app file

// Switch element switches the routes and are props.children properties for the Layout function

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Router>
          <NavigationBar/>
          <Jumbotron/>
        <Layout>
          <Switch>                              
              <Route exact path="/"component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>

    );
  }
  
}

export default App;