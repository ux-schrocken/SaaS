import React, { Component } from 'react';
import './App.css';
import { Route,NavLink,HashRouter} from "react-router-dom";

import Login from './components/login/login.component';
import Register from './components/register/register.component';

class App extends Component {
  render() {
    return (
      <div  >
        {/* <Register/> */}
        {/* <Login /> */}
        <HashRouter >
          <div  >
            <ul textDecoration='none'>
              <li><NavLink to="/" ></NavLink></li>
              <li><NavLink to="/Register"></NavLink></li>
            </ul>
            <div >
              <Route exact path="/" component={Login} />
              <Route exact path="/Register" component={Register} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
// style={{textDecoration:'none'}}
export default App;
