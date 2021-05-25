import React from 'react'
import logo from "../../assets/img/zalopay.png";
import android from "../../assets/img/android-logo.png";
import ios from "../../assets/img/apple-logo.png";
import zalo from "../../assets/img/zalo-logo.png";
import facebook from "../../assets/img/facebook-logo.png";
import school from "../../assets/img/logo-school.png";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="partner">
                <p className="text-light">SPONSERS</p>
                <div className="logos">
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                    <div>
                        <img src={logo} width="50"></img>
                    </div>
                </div>
            </div>
            <div className="socials">
                <p className="text-light">SOCIALS APP</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={android} width="30"></img>
                    </div>
                    <div>
                        <img src={ios} width="30"></img>
                    </div>
                </div>
            </div>
            <div className="mobile-app">
                <p className="text-light">MOBILE APP</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={facebook} width="30"></img>
                    </div>
                    <div>
                        <img src={zalo} width="30"></img>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <img src={school} width="200"></img>
                <p className="text-light text-uppercase">Quang Long's graduation thesis</p>
                <p className="text-light text-uppercase">CYBERSOFT FE-02</p>
            </div>
        </footer>
    )
}
