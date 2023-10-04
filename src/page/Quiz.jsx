import { useContext } from 'react';
import TimeStamp from '../components/TimeStamp';
import { useParams, useNavigate } from 'react-router-dom';
import Answer from '../components/Answer';
import Context from '../store/Context';
const Quiz = () => {
    const [{questions, user_answers_true, user_wrong_answers}, dispatch] = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()
    const question = questions.filter((item) => item.id == id)

    const handleOnclick = (answer) => {
        if (answer === question[0].correct_answer) {
            dispatch({
                type: 'TOTAL_ANSWER',
                userAnswer: answer
            })
        }
        else{
            dispatch({
                type: 'TOTAL_WRONG_ANSWER',
                wrongAnswer: answer
            })
        }
        if (Number(id) === questions.length) {
            navigate('/finish')
        }else{
            navigate(`/quiz/${Number(id) + 1}`)

        }
    }
    console.log('true: ', user_answers_true);
    console.log('wrong: ', user_wrong_answers);
    return (
        <div className='container'>
            <div className='flex justify-between mx-32'>

                <span className=' max-w-fit items-center space-x-3 text-neutral-700 ring-[1px] ring-neutral-400 rounded-lg p-3 text-xs font-semibold mr-3'><span className='text-lg'>{question[0].id}</span>/{questions.length}</span>
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
