
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.scss'
import Context from '../store/Context'
const Login = () => {
    const navigate = useNavigate()
    const [{ allUser }, dispatch] = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        const auth = allUser.filter((user) => (user.email === email && user.password === password))
        if (auth.length > 0) {
            sessionStorage.setItem('user', JSON.stringify(user))
            navigate('/quiz')
        }
    }, [user])
    const handleSignIn = () => {
        if(email !== '' && password !== ''){
            setUser({
                email: email,
                password: password
            })
            dispatch({
                type: 'LOGIN',
                user: {
                    email: email,
                    password: password
                }
            })
        }else {
            setError('Enter you email or password')
        }

    }
    return (
        <div className='w-1/4 justify-center container-login p-5 md:py-10 md:px-10 '>
            <h1 className="font-bold text-lg text-neutral-900 mb-5">
                Đăng nhập
            </h1>
            <div className="flex justify-between items-center mb-2">
                <label
                    className="text-xs md:text-sm text-neutral-600 font-semibold"
                >
                    Email
                </label>
            </div>
            <input
                type="email"
                autoComplete="off"
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
                type="password"
                className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-orange-500/80"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error !== null && (<p className="text-red-500">{error}</p>)}
            <br />
            <button
                className="flex rounded-full bg-orange-500 hover:bg-neutral-50 hover:text-orange-500 p-0.5 justify-center font-medium md:font-bold text-base  text-center  mb-3 transition text-white mt-2"
                onClick={() => handleSignIn()}
            >

                <span>Sign In</span>
            </button>
            <p className="text-gray-600 text-xs font-semibold mt-3">
                Don't have account ?
                <Link className="ml-2 text-orange-500" to={"/register"}>
                    Sign Up
                </Link>{" "}
            </p>
        </div>
    );
}

export default Login;
