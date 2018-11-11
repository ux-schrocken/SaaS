import React, { Component } from 'react';
import './App.css';
import { Route,NavLink,HashRouter} from "react-router-dom";

import Login from './components/login/login.component';
import Register from './components/register/register.component';
import Temp from './components/temp/temp';
class App extends Component {
  render() {
    return (
      <div  >
        {/* <Register/> */}
        {/* <Login /> */}
        <HashRouter >
          <div  >
            <ul style={{ listStyleType:'none'}}>
              <li><NavLink to="/" ></NavLink></li>
              <li><NavLink to="/Register"></NavLink></li>
              <li><NavLink to="/Temp"></NavLink></li>

            </ul>
            <div >
              <Route exact path="/" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Temp" component={Temp} />

            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
// style={{textDecoration:'none'}}
export default App;
