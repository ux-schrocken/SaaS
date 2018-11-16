import React, { Component } from 'react';
import './signup.css';
import Carousel from '../carousel2/carousel';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import PasswordComp from '../PasswordInput/PasswordInput';
import TextField from '../PasswordInput/TextFieldAnt';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActivationSent: false,
            username: '',
            password: '',
            passwordvalid: true,

            eightchar: false,
            lowerCase: false,
            uppercase: false,
            oneDigit: false,
            specialChar: false,
        }
    }

    /* -----------------    onChange    ------------------ */
    buttonSubmit = () => {
        alert(this.state.username + '  ' + this.state.password)
        this.setState({ isActivationSent: true })
    }
    usernameOnChange = (event) => {
        this.setState({ username: event.target.value });
    }
    passwordOnChange = (event) => {

        this.setState({ password: event.target.value });
    }


    /* --------------------       PASSWORD VALIDATION      -------------------- */
    getPassword = (text) => {

        checkIfEightChar(text) ? this.setState({ eightchar: true }) : this.setState({ eightchar: false });
        checkIfOneLowercase(text) ? this.setState({ lowerCase: true }) : this.setState({ lowerCase: false });
        checkIfOneUppercase(text) ? this.setState({ uppercase: true }) : this.setState({ uppercase: false });
        checkIfOneDigit(text) ? this.setState({ oneDigit: true }) : this.setState({ oneDigit: false });
        checkIfOneSpecialChar(text) ? this.setState({ specialChar: true }) : this.setState({ specialChar: false });

        function checkIfEightChar(text) {
            return text.length >= 8;
        }
        function checkIfOneLowercase(text) {
            return /[a-z]/.test(text);
        }
        function checkIfOneUppercase(text) {
            return /[A-Z]/.test(text);
        }
        function checkIfOneDigit(text) {
            return /[0-9]/.test(text);
        }
        function checkIfOneSpecialChar(text) {
            return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text);
        }
    }


    render() {
        const text = <span>prompt text</span>;

        let cardSwitcher;
        if (this.state.isActivationSent === false) {
            cardSwitcher =
                <div >
                    <div style={{ color: '#8D9293', marginTop: '5%' }}>
                        Just enter details and verify your account.
                </div>
                {/* -------------    signup card    -------------- */}
                    <div className='cardreg'>
                        <div style={{ color: '#8D9293', fontSize: '1em' }}>Email Address</div>

                        <input className='emailreg' onChange={this.usernameOnChange} ></input>

                        <div style={{ color: '#8D9293', fontSize: '1em', marginTop: '5%' }}>Password</div>

                        <Tooltip placement="topRight" title={text}>
                            <input
                                className='passwordreg' onChange={this.passwordOnChange} type='password' >
                            </input>
                        </Tooltip>

                        <div style={{ display: 'none' }}>
                            <TextField />
                            <PasswordComp style={{}} />
                        </div>

                        <div style={{ fontSize: '1em', color: '#969598', marginTop: '20px' }} ><input type='checkbox' >

                        </input> &nbsp;   I am not interested in updates about Schrocken products and services. <a href="">Privacy Policy.</a>
                            <br /><br />   By clicking "Continue" I agree to <a href="">Our Terms and Service.</a>
                        </div>
                        <Button style={{ height: '40px', marginTop: '5%' }} type='primary' onClick={this.buttonSubmit}>Continue</Button>
                    </div>
                </div>
        }
        else {
            cardSwitcher =
                <div >
                    <div style={{ color: '#89CE3A', marginTop: '5%' }}>
                        Thank You! We are all set now.
        </div>
                    <div className='cardreg'>
                        {/* <input className='emailreg' ></input> */}
                        <div style={{ fontSize: '1.3em', color: '#969598' }} >
                            We just sent you an activation email. Activate your account now for an instant access.
                        </div>
                        <div style={{ fontSize: '1em', color: '#969598', marginTop: '5%' }}> Please note that all activation emails will expire in 24 hours. You have to sign up again, if deactivated.</div>

                        <button className='continuebutton'>Sign In</button>
                        {/* style={{ height: '40px', marginTop: '5%', backgroundColor: '#E36E39', color: 'white' }} onClick={this.buttonSubmit} */}
                    </div>

                </div>
        }
        return (
            <div className='primary-grid'>

                <div className='carousel-box'>
                    <Carousel />
                    <button className='request-demo-button'>Request for a Demo</button>
                    <Link to='/'>
                        <img className='bannerwhite' src={require('../../assets/images/Schrocken-Logo-White@3x.png')} alt="Banner white" /></Link>
                </div>
                <div className='signup-box'>


                    <div >
                        <img src={require("../../assets/images/Schrocken-Logo@3x.png")} className='brandingsup' />
                    </div>
                    <div className='heading'
                    > Sign Up for An Account
                    </div>
                    <div
                        style={{ color: '#8D9293', marginTop: '0.5%' }}>Get started with a Schrocken Account.
                            </div>
                    {cardSwitcher}
                    <div className='lastdiv' >
                        Already have an account? &nbsp;
                           <Link to='/'><button className='signinreg'>Sign In</button></Link>
                    </div>
                    <div className='copyrightreg'>
                        &#169; 2018 Schrocken Pvt. Ltd <a href="">Terms</a> <a href="">Privacy</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
