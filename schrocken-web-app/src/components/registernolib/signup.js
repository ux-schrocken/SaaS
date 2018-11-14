import React, { Component } from 'react';
import './signup.css';
import Carousel from '../carousel2/carousel';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActivationSent: false,
        }
    }
    render() {
        let cardSwitcher;
        if (this.state.isActivationSent === false) {
            cardSwitcher =
                <div >
                    <div style={{ color: '#8D9293', marginTop: '1%' }}>
                        Just enter details and verify your account.
                </div>
                    <div className='cardreg'>
                        <div style={{ color: '#8D9293', fontSize: '1em' }}>Email Address</div>
                        <input className='emailreg' ></input>
                        <div style={{ color: '#8D9293', fontSize: '1em', marginTop: '5%' }}>Password</div>
                        <input className='passwordreg' type='password' ></input>
                        <div fontSize='1em' color='#969598' ><input type='checkbox'></input> &nbsp;   I am not interested in updates about Schrocken products and services. <a href="">Privacy Policy.</a>
                            <br /><br />   By clicking "Continue" I agree to <a href="">Our Terms and Service.</a>
                        </div>
                        <Button style={{ height: '40px', marginTop: '5%' }} type='primary' onClick={this.buttonSubmit}>Continue</Button>
                    </div>
                </div>
        }
        else {
            cardSwitcher =
                <div>

                </div>
        }
        return (
            <div className='primary-grid'>
                <div className='carousel-box'>
                    <Carousel />
                </div>
                <div className='signup-box'>
                    <div >
                        <img src={require("../../assets/images/Schrocken-Logo@3x.png")} className='brandingsup' />
                    </div>
                    <div className='heading'
                    > Sign Up for An Account
                    </div>
                    <div
                        style={{ color: '#8D9293', marginTop: '2%' }}>Get started with a Schrocken Account.
                            </div>
                    {cardSwitcher}
                    <div className='lastdiv' >
                        Already have an account?
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
