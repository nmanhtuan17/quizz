import React, { useEffect, useState } from 'react';

const Options = ({value, idx, userAnswer, trueAws}) => {
    const s = ['A', 'B', "C", "D"]
    return (
        <div 
            style={
                userAnswer !== trueAws && userAnswer === value ? {
                    backgroundColor: "rgb(254 202 202 /1)",
                    color: "rgb(127 29 29 /1)" 
                }:{}
            }
        
            className={trueAws !== value ?"mt-3 rounded-full bg-neutral-300 px-2" : "mt-3 rounded-full bg-green-300 px-2"}>
            {s[idx]}. {value}
        </div>
    );
}

export default Options;
