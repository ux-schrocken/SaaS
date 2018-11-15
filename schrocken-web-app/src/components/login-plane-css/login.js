import React from 'react';
import './login.css';
// import bgImage from '../../assets/images/bg-SignIn.png';
import SignIn from './SignIn';
// import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <SideBar />
            <SignIn />
        </div>
    )
}

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarcontent">
                <img src={require("../../assets/images/bg-SignIn.png")} className="bgImg" />
                <div className="content">
                    <img src={require("../../assets/images/Schrocken-Logo-White@3x.png")} className="schrockenLogo" />
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <br />
                    <button className='requestbutton' >Request for a Demo</button>
                    <div className="techimages">
                        <text>Powered By</text>
                        <img src={require("../../assets/images/ic-hyperledger.png")} className="hyperLogo" />

                        <img src={require("../../assets/images/ic-blockchain.png")} className="blockchainLogo" />

                    </div>

                </div>
            </div>
        </div>
    )
}



export default Login;