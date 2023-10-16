import { useContext } from 'react';
import TimeStamp from '../components/TimeStamp';
import { useParams, useNavigate } from 'react-router-dom';
import Answer from '../components/Answer';
import Context from '../store/Context';
const Quiz = () => {
    const [{ topics}, dispatch] = useContext(Context)
    const { id, page } = useParams()
    const navigate = useNavigate()
    const question2 = topics[page].all_questions
    const question = question2.filter((item) => item.id === Number(id))

    
    const handleOnclick = (answer) => {
        dispatch({
            type: 'SET_ANSWER',
            payload: {
                id: id,
                user_answer: answer,
                topic: page
            }
        })
        if(answer === question[0].correct_answer){
            dispatch({
                type: "COUNT_TRUE",
            })
        }else{
            dispatch({
                type: "COUNT_FALSE",
            })
        }
        if (Number(id) === question2.length) {
            dispatch({
                type: 'SET_STATUS',
                topic: page
            })
            navigate('/finish', {state: question2})
        }else{
            navigate(`/quiz/${page}/${Number(id) + 1}`)

        }
    }
    return (
        <div className='container p-5 md:py-10 md:px-10 '>
            <div className='flex justify-between mx-32'>

                <span className=' max-w-fit items-center space-x-3 text-neutral-700 ring-[1px] ring-neutral-400 rounded-lg p-3 text-xs font-semibold mr-3'><span className='text-lg'>{question[0].id}</span>/{question2.length}</span>
                <TimeStamp />
            </div>

            {question.map((item) => (
                <div key={item.id} className='mx-auto w-2/3 mt-20 text-lg  font-bold text-center'>{item.question}</div>
            ))}
            <div className='flex mt-32 justify-evenly w-1/2 mx-auto'>
            {question[0].all_answers.map((item, index) => (<Answer answer={item} handleOnclick={handleOnclick} key={index} />))}
            </div>
            
        </div>
    );
}

export default Quiz;
