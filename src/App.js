import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Test from './components/Test.js';
import Preloader from './components/Preloader.js';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App" ref={this.myRef}>
      <Router>
        <Switch>
        <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Preloader>
              <Main />
            </Preloader>
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
