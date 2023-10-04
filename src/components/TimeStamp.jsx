
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../store/Context';
const TimeStamp = () => {
    const [countDown, setCountdown] = useState(360)
    const [minutes, setMinutes] = useState(59)
    const [seconds, setSeconds] = useState(60)
    useEffect(()=> {
        let countId = setInterval(() => {
            setSeconds(seconds-1)
        }, 1000);
        if (seconds < 0) {
            setMinutes(minutes - 1)
            setSeconds(60)
        }
        return ()=> clearInterval(countId)
    }, [seconds])
    const cacularTime = (countDown)=> {
        setMinutes(countDown / 60)
    }
    return (
            <div className=" max-w-fit items-center space-x-3 text-neutral-700 ring-[1px] ring-neutral-400 rounded-lg p-3 text-xs font-semibold">
                <span>{minutes} : {seconds}</span>
            </div>
    );
}

export default TimeStamp;
