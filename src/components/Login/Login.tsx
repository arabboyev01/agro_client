import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Language } from "@/hooks/language";
import SpaceAgro from '@/assets/space_agro.png'
import { LoginValueType } from "@/types";
import { api } from "@/api";
import { setToken } from "@/utils/tokens"
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)
    const { lang } = Language("login")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {

        if (!email.trim()) {
            toast.error(lang("email"), { theme: "dark" });
            return
        }

        if (!password.trim()) {
            toast.error(lang("password"), { theme: "dark" })
            return
        }

        const payload: LoginValueType = {
            email,
            password
        }
        api.postData('login', payload).then(data => {
            if (!data.success) return toast.error(data.message, {
                theme: "dark"
            })

            setToken(data.token)
            toast.success(data.message, {
                theme: "dark"
            })
            router.push('/admin')
        })
    }

    return (
        <div className="login-main">
            <div className="login-left">
                <div className="logo" onClick={() => router.push('/')}>
                    <img src={SpaceAgro.src} alt="Space Agro" className="logo_image" />
                </div>
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-center">
                        <h2>{lang("title")}</h2>
                        <p>{lang("text")}</p>
                        <form>
                            <input type="email" placeholder="Email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            <div className="pass-input-div">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                                />

                                {showPassword ?
                                    <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> :
                                    <FaEye onClick={() => { setShowPassword(!showPassword) }} />
                                }

                            </div>

                            <div className="login-center-options">
                                <div className="remember-div">
                                    <input type="checkbox" id="remember-checkbox" />
                                    <label htmlFor="remember-checkbox">
                                        {lang("remember")}
                                    </label>
                                </div>
                            </div>
                            <div className="login-center-buttons" onClick={onSubmit}>
                                <button type="button">{lang("login")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
