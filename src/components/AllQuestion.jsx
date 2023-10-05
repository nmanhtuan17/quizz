import {useContext} from 'react';
import Context from '../store/Context';
import Options from './Options';
const AllQuestion = ({question, id}) => {
    const [{questions_after}] = useContext(Context)
    const userAnswer = questions_after.find((item) => item.id == id)
    
    return (
        <div className=''>
            <div >{question.id}. {question.question}</div>
            {question.all_answers.map((item, index) => (<Options 
                                                            key={index} 
                                                            value={item} 
                                                            idx={index} 
                                                            userAnswer={userAnswer.user_answer}
                                                            trueAws={question.correct_answer}
                                                            />))}
        </div>
    );
}

export default AllQuestion;
