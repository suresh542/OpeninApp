import React, { useState } from 'react'
import "./LoginPage.scss"
import mainLogoLoginPage from "./image/MainLogo.png"
import GoogleIcon from "./image/GoogleIcons.png"
import { Navigate } from 'react-router-dom'

export default function LoginPage() {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [Nav, setNav] = useState("")
    const [invalidMsg, setInvalidMsg] = useState("")
    const [errorMassage, setErrorMassage] = useState();

    const HandelLogin = (e) => {
        e.preventDefault();
        if (userName.toLowerCase() !== null && password !== null) {
            e.preventDefault();
            setLoggedIn(true);
            setInvalidMsg("")
            setErrorMassage(errorMassage)
            setNav("/UserPage")
        }
        else if (userName === null && password === null) {
            setInvalidMsg("Enter the Username & Password")

        }
        else {
            setInvalidMsg("Invalid Username & Password")
            setErrorMassage('');
            setNav("")
        }
    };

    return (
        <div>
            {isLoggedIn ? (<Navigate to={Nav}/>) :
                (
                    <div className='MainLoginPage'>
                        <div className='loginPageBgImage'>
                        </div>
                        <div className="container-fluid">
                            <div className="row" id='loginPageRow'>
                                <div className="col-md-6 p-0">
                                    <div id='leftSideOfLoginPage'>
                                        <div className="mainBaseLogo">
                                            <a href="Home"><img src={mainLogoLoginPage} id='MainLogo' alt="" /></a>
                                        </div>
                                        <div className='BaseText'>
                                            base
                                        </div>
                                        <div className='socialMediaLinksIcons '>
                                            <ul className='list-unstyled'>
                                                <li><a href="#gitHub"><i class="fa-brands fa-github"></i></a></li>
                                                <li><a href="#twitter"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#LinkedIn"><i class="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="#discord"><i class="fa-brands fa-discord"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="rightSideLoginPage">
                                        <div className='loginContent'>
                                            <div className="SignIn">
                                                sign in
                                            </div>
                                            <div className='YourAccountText'>
                                                <span>Sign in to your account</span>
                                            </div>
                                            <div className='' id='signInGoogleAndApple'>
                                                <div className='' id='signInGoogle'>
                                                    <a href="gmail.com">
                                                        <img src={GoogleIcon} alt="" id='RightSideIcons' />
                                                        <span>Sign in with Google</span>
                                                    </a>
                                                </div>
                                                <div className='' id='signInApple'>
                                                    <a href="AppleLogin">
                                                        <i class="fa-brands fa-apple" id='RightSideIcons'></i>
                                                        <span>Sign in with Apple</span>
                                                    </a>
                                                </div>
                                            </div>


                                            <div className='InvalidError'>
                                                {invalidMsg}
                                            </div>
                                            <div className='' id='LoginFrom'>
                                                <form action="" onSubmit={HandelLogin}>
                                                    <div>
                                                        <label htmlFor="">
                                                            Email address
                                                        </label>
                                                        <div><input
                                                            type="text"
                                                            name=""
                                                            id="username"
                                                            value={userName}
                                                            onChange={(e) => setUserName(e.target.value)} /></div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="">
                                                            Password
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="password"
                                                                name=""
                                                                id="username"
                                                                value={password.toLowerCase()}
                                                                onChange={(e) => setPassword(e.target.value)} />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <a href="forgotPassword">Forgot password?</a>
                                                    </div>
                                                    <div>
                                                        <input type="submit" className='btn btn-primary' value="Sign In" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className='RegisterHere' id='RegisterHere'>
                                                <p>Don’t have an account? <span><a href="RegisterHere">Register here</a></span></p>
                                            </div>
                                        </div>
                                        <div className='socialMediaLinksIconsMoblie'>
                                            <ul className='list-unstyled'>
                                                <li><a href="#gitHub"><i class="fa-brands fa-github"></i></a></li>
                                                <li><a href="#twitter"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#LinkedIn"><i class="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="#discord"><i class="fa-brands fa-discord"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
