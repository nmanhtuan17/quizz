import {useContext} from 'react';
import Context from '../store/Context';
import Options from './Options';
const AllQuestion = ({question, id}) => {
    const [{user_answers_true, user_wrong_answers}] = useContext(Context)
    return (
        <div className=''>
            <div >{question.id}. {question.question}</div>
            {question.all_answers.map((item, index) => (<Options key={index} value={item} idx={index} userAws={user_answers_true}/>))}
        </div>
    );
}

export default AllQuestion;
