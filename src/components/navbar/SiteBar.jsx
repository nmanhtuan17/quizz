import { useContext } from 'react';
import { FiUser } from 'react-icons/fi'
import Context from '../../store/Context';
const SiteBar = () => {
    const [{ userData }] = useContext(Context)
    return (
        <div >
            <div className="h-screen border-r-slate-200 border">
                <div className='flex p-3 mt-5 ml-5  '>
                    <span className='text-3xl'><FiUser /></span>

                    <span className='mx-3 text-xl'>{userData.email}</span>
                </div>
                <div className='border w-5/6 border-r-slate-200 mx-auto mb-2'></div>
                <div className='mx-5'>
                    <div className='  '>Point:  250</div>
                    <div className='  '>Test Complete:    2</div>
                    <div className='  '>Test No Complete: 1</div>
                </div>
            </div>
        </div>
    );
}

export default SiteBar;
