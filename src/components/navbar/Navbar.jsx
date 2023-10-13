import { NavLink, useNavigate, redirect } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Context from "../../store/Context";
function Navbar() {
    const [{ userLogin, userData }, dispatch] = useContext(Context)
    
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })
        sessionStorage.removeItem('user')
        navigate('/')
    }
    return (
        <div>
            <nav className="w-full bg-transparent text-neutral-900 px-5 md:px-10 flex items-center justify-between py-5 text-sm border-b-slate-200 border">
                <h1 className="text-orange-500 text-2xl font-bold tracking-tight flex items-center gap-1">
                    Thi bằng lái xe
                    {/* <div className="w-2 h-2 bg-red-500 mt-2 ml-1 rounded-full" /> */}
                </h1>
                <div className="space-x-5">
                    {!userLogin ?

                        (<NavLink className={({ isActive }) => isActive ? "py-2 px-5 text-orange-500 font-semibold border rounded-full border-orange-500"
                            :
                            "py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-orange-500"}
                            to={"/"}>
                            Login
                        </NavLink>)
                        :
                        (<div>
                            <span className="text-lg font-semibold mr-5">{userData.email}</span>
                            <button
                                className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-red-600"
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </button>
                        </div>)
                    }
                    {
                        !userLogin && (<NavLink className={({ isActive }) => isActive ? "py-2 px-5 text-orange-500 font-semibold border rounded-full border-orange-500"
                            :
                            "py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-orange-500"}
                            to={"/register"}>
                            Register
                        </NavLink>)
                    }


                </div>

            </nav>
        </div>

    );
}

export default Navbar;