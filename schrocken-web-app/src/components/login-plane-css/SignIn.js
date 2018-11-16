import React, { Component } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:"password",
            emailInputClicked: false,
            passwordInputClicked: false,
            rememberMe: false,
            showPassword: false,
        }
    }

<<<<<<< HEAD
    togglePassword = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // var passwordInputClicked = true;
        var showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword,
            // passwordInputClicked: passwordInputClicked,
=======
    togglePassword = () => {
        var passwordInputClicked = true;
        var showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword,
            passwordInputClicked: passwordInputClicked

>>>>>>> aa5b17f90d7982bc3f29b0d0589139df07639a40
        });
        //    alert(passwordInputClicked)
    }
<<<<<<< HEAD
    emailInputClicked = (event) => {

        // var passwordInputClicked = this.state.passwordInputClicked;
        // if (passwordInputClicked) { this.setState({ passwordInputClicked: !passwordInputClicked }) }
        var emailInputClicked = !this.state.emailInputClicked;
        this.setState({ emailInputClicked })
    }
    passwordInputClicked = (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        // var emailInputClicked = this.state.emailInputClicked;
        // if (emailInputClicked) { this.setState({ emailInputClicked: !emailInputClicked }) }
        var passwordInputClicked = !this.state.passwordInputClicked;
        this.setState({ passwordInputClicked })
        // alert(passwordInputClicked)
=======
    emailInputClicked = () => {
        var passwordInputClicked = this.state.passwordInputClicked;
        if (passwordInputClicked) { this.setState({ passwordInputClicked: !passwordInputClicked }) }
        var emailInputClicked = !this.state.emailInputClicked;
        this.setState({ emailInputClicked })
    }
    passwordInputClicked = () => {
        var emailInputClicked = this.state.emailInputClicked;
        if (emailInputClicked) { this.setState({ emailInputClicked: !emailInputClicked }) }
        var passwordInputClicked = !this.state.passwordInputClicked;
        this.setState({ passwordInputClicked })
>>>>>>> aa5b17f90d7982bc3f29b0d0589139df07639a40
    }
    render() {
        var showPassword = this.state.showPassword;
        var emailInputClicked = this.state.emailInputClicked;
<<<<<<< HEAD
        var passwordInputClicked = this.state.passwordInputClicked;

=======
        var passwordInputClicked = this.state.passwordInputClicked
>>>>>>> aa5b17f90d7982bc3f29b0d0589139df07639a40
        return (
            <div className="signin">
                <div className="signincontainer">
                    <div className="signinheading">
                        <h1>Sign In</h1>
                        <p>Sign into your Schrocken Account</p>
                    </div>

                    <div className="card-container">
                        <p className="signinEnterDetails">Enter your Sign in details to view your Account</p>
                        <div className="signincard block">
                            <div className="repeat-block">
                                <label className={emailInputClicked ? "label-active block" : "label block"} >Email</label>
<<<<<<< HEAD
                                <input type="text" className="input block" onFocus={this.emailInputClicked} onBlur={this.emailInputClicked} />
                            </div>
                            <div className="repeat-block">
                                <label className={passwordInputClicked ? "label-active block" : "label block"}>Password</label>
                                <div className={passwordInputClicked ? "input block bottom":"input block"}  >
                                <input type={showPassword? "text" : "password"} className="input-password" onFocus={this.passwordInputClicked} onBlur={this.passwordInputClicked} />
                                <img src={showPassword ?
                                    (require("../../assets/images/eye-closed.png"))
                                    : (require("../../assets/images/eye-open.png"))
                                } onClick={this.togglePassword}  className="show-icon" />
                                </div>
                                {/* {showPassword ? (
                                    <div className="input block" onFocus={this.passwordInputClicked} onBlur={this.passwordInputClicked}>
                                        <input type="text" className="input-password" />
                                        <img src={require("../../assets/images/eye-closed.png")} onClick={this.togglePassword} className="show-icon" />
                                    </div>
                                )
                                    : (
                                        <div className="input block" onFocus={this.passwordInputClicked} onBlur={this.passwordInputClicked}>
                                            <input type="password" className="input-password" />
                                            <img src={require("../../assets/images/eye-open.png")} onClick={this.togglePassword} className="show-icon" />
                                        </div>
                                    )
                                } */}

=======
                                <input className={emailInputClicked ? "input input-active  block" : "input block"} onClick={this.emailInputClicked} />
                            </div>
                            <div className="repeat-block">
                                <label className={passwordInputClicked ? "label-active block" : "label block"}>Password</label>

                                {showPassword ? (
                                    <div>
                                        <input className={passwordInputClicked ? "input-active input block" : "input block"} onClick={this.passwordInputClicked} />
                                        <img src={require("../../assets/images/eye-closed.png")} onClick={this.togglePassword} />
                                    </div>)
                                    : (
                                        <div>
                                            <input className={passwordInputClicked ? "input-active input block" : "input block"} type="password" onClick={this.passwordInputClicked} />
                                            <img src={require("../../assets/images/eye-open.png")} onClick={this.togglePassword} />
                                        </div>
                                    )


                                }
                                {/* <img src={require("../../assets/images/eye.png")} onClick={this.togglePassword} /> */}
>>>>>>> aa5b17f90d7982bc3f29b0d0589139df07639a40
                            </div>

                            <input type="radio" value="Remember Me" id="remember" className="remember label" /><label for="remember">Remember me</label>
                            <button className="signin-button block">Sign in</button>

                        </div>
                    </div>
                    <div className="other-options">
                        <Link to="/ForgotPassword" className="forgot"> <p>Forgot Password?</p></Link>
                        <div className="signup-link">
                            <p>Don't have an Account</p>
                            <Link to="/Register" style={{ textDecoration: "none" }} > <button>Get Started</button></Link>
                        </div>
                    </div>
                    <footer className="footer"> &#169; 2018 Schrocken Pvt. Ltd <a href="">Terms</a> <a href="">Privacy ...</a>
                    </footer>

                </div>

            </div>
        )
    }
}

export default SignIn;