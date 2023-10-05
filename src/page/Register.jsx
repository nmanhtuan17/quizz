import { useState, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.scss'
import Context from '../store/Context';
const Register = () => {
    const [state, dispatch] = useContext(Context)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [msg, setMsg] = useState()

    const usernameInput = useRef(null)
    const emailInput = useRef()
    const passwordInput = useRef()
    const password2Input = useRef()

    const navigate = useNavigate()
    const handleRegister = () => {
        if (username === '') {
            setMsg('Nhập tên người dùng')
            usernameInput.current.focus()
        }
        else if (email === '') {
            setMsg('Nhập email')
            emailInput.current.focus()
        }
        else if (password === '') {
            setMsg('Nhập password')
            passwordInput.current.focus()
        }
        else if (password2 === '') {
            setMsg('Comfirm password')
            password2Input.current.focus()
        }
        else if (password !== password2) {
            setMsg('Mật khẩu xác nhận không khớp')
            password2Input.current.focus()
        }
        else {

            dispatch({
                type: 'REGISTER',
                newUser: {
                    username: username,
                    email: email,
                    password: password
                }
            })
            navigate('/')
        }
    }

    return (
        <div className='w-1/4 justify-center container-login p-5 md:py-10 md:px-10 '>
            <h1 className="font-bold text-lg text-neutral-900 mb-5">
                Đăng ký
            </h1>
            <div className="flex justify-between items-center mb-2">
                <label
                    className="text-xs md:text-sm text-neutral-600 font-semibold"
                >
                    Username
                </label>
            </div>
            <input
                ref={usernameInput}
                type="text"
                autoComplete="off"
                placeholder="Enter your username"
                className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-orange-500/80 "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <br />
            <div className="flex justify-between items-center mb-2">
                <label
                    className="text-xs md:text-sm text-neutral-600 font-semibold"
                >
                    Email
                </label>
            </div>
            <input
                ref={emailInput}
                type="email"
                autoComplete="off"
                name="email"
                placeholder="Enter your email"
                className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-orange-500/80 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <div className="flex justify-between items-center mb-2">
                <label
                    className="text-xs md:text-sm text-neutral-600 font-semibold"
                >
                    Password
                </label>
            </div>
            <input
                ref={passwordInput}
                type="password"
                className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-orange-500/80"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="flex justify-between items-center mb-2">
                <label
                    className="text-xs md:text-sm text-neutral-600 font-semibold"
                >
                    Comfirm Password
                </label>
            </div>
            <input
                ref={password2Input}
                type="password"
                className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-orange-500/80"
                name="password"
                placeholder="Enter your password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
            />
            <br />
            {msg ? (<span className='mt-2 text-red-500 text-xs'> *{msg}</span>) : (<span></span>)}
            <button
                className="flex rounded-full bg-orange-500 hover:bg-neutral-50 hover:text-orange-500 p-0.5 justify-center font-medium md:font-bold text-base  text-center  mb-3 transition text-white mt-2"
                onClick={() => handleRegister()}
            >

                <span>Sign Up</span>
            </button>
            <p className="text-gray-600 text-xs font-semibold mt-3">
                Have account ?
                <Link className="ml-2 text-orange-500" to={"/register"}>
                    Sign In
                </Link>{" "}
            </p>
        </div>
    );
}

export default Register;
