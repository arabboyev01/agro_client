import React, { useEffect, useState } from "react";
import agro from "../../assets/agro.jpg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Image from "next/image"
import { Language } from "@/hooks/language";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { lang } = Language("login")

    return (
        <div className="login-main">
            <div className="login-left">
                {/* <Image src={agro.src} alt="agro-image" width={1000} height={925} style={{ objectFit: "cover"}}/> */}
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-center">
                        <h2>{lang("title")}</h2>
                        <p>{lang("text")}</p>
                        <form>
                            <input type="email" placeholder="Email" />
                            <div className="pass-input-div">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                                {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}

                            </div>

                            <div className="login-center-options">
                                <div className="remember-div">
                                    <input type="checkbox" id="remember-checkbox" />
                                    <label htmlFor="remember-checkbox">
                                        {lang("remember")}
                                    </label>
                                </div>
                            </div>
                            <div className="login-center-buttons">
                                <button type="button">{lang("login")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
