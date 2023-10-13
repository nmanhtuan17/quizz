import { useContext, useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi'
import Context from '../../store/Context';
const SiteBar = () => {
    const [{ user_answers_true }] = useContext(Context)
    const [userLogin, setUserLogin] = useState(null)
    useEffect(() => {
        getUser()
    }, [])
    const getUser = () => {
        try {
            const user = sessionStorage.getItem('user')
            if (user) {
                setUserLogin(JSON.parse(user))
            }

        } catch (error) {
            console.log(error);
        }
    }
    if (userLogin) {
        console.log(userLogin);

    }
    return (
        <div >
            <div className="h-screen border-r-slate-200 border">
                <div className='flex p-3 mt-5 ml-5  '>
                    <span className='text-3xl'><FiUser /></span>

                    {userLogin && (<span className='mx-3 text-xl'> {userLogin.email} </span>)}
                </div>
                <div className='border w-5/6 border-r-slate-200 mx-auto mb-2'></div>
                <div className='mx-5'>
                    <div className='  '>Point:  {user_answers_true * 10}</div>
                    <div className='  '>Test Complete:    2</div>
                    <div className='  '>Test No Complete: 1</div>
                </div>
            </div>
        </div>
    );
}

export default SiteBar;
