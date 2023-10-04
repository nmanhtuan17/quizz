import {useRef} from 'react';

const Answer = ({answer, handleOnclick}) => {
    const answerRef = useRef()
    
    return (
        <div className='cursor-pointer max-w-fit items-center space-x-3 text-neutral-700 ring-[1px] ring-neutral-400 rounded-lg p-3 text-sm font-semibold'
            ref={answerRef}
            onClick={()=> handleOnclick(answerRef.current.outerText)}
        >
            {answer}
        </div>
    );
}

export default Answer;
