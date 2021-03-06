import React, { Component } from 'react';
import './App.css';
import { Route,NavLink,HashRouter} from "react-router-dom";

// import Login from './components/login/login.component';
import Login from './components/login-plane-css/login';

import Register from './components/registernolib/signup';
import Temp from './components/temp/temp';
import ForgotPassword from './components/forgot-password/ForgotPassword';
class App extends Component {
  render() {
    return (
   
    
        <HashRouter >
          <div  >
            <ul style={{ listStyleType:'none',margin:"0"}}>
              <li><NavLink to="/" ></NavLink></li>
              <li><NavLink to="/Register"></NavLink></li>
              <li><NavLink to="/Temp"></NavLink></li>
              <li><NavLink to="/ForgotPassword"></NavLink></li>

            </ul>
            <div >
              <Route exact path="/" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Temp" component={Temp} />
              <Route exact path="/ForgotPassword" component={ForgotPassword} />

            </div>
          </div>
        </HashRouter>
      
    );
  }
}
// style={{textDecoration:'none'}}
export default App;
