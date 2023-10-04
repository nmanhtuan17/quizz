import React, { useEffect, useState } from 'react';

const Options = ({value, idx, userAws}) => {
    const s = ['A', 'B', "C", "D"]
    const [correct, setCorrect] = useState(false)
    useEffect(()=> {

        setCorrect(()=>{
            let check = userAws.filter((item) => item == value)
            if (check.length > 0) {
                return true
            }else {
                return false
            }
        })
    }, [])
    return (
        <div className={!correct === true ?"mt-3 rounded-full bg-neutral-300 px-2" : "mt-3 rounded-full bg-green-300 px-2"}>
            {s[idx]}. {value}
        </div>
    );
}

export default Options;
