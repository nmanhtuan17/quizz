import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../store/Context';
const Text = ({ idx, page}) => {
    const [{topics}, dispatch] = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className='w-1/5 h-1/3 m-10 text-center bg-orange-200 rounded-md py-5 w-{300}'>
            <h1 className='text-lg font-semibold '>Bài thi {idx}</h1>
            <div className='my-3'>Câu hỏi: {topics[page-1].all_questions.length}</div>
            <div>Thời gian: 60p</div>
            <div className="mt-5">{topics[page-1].status ? 'Đã hoàn thành': 'Chưa hoàn thành'}</div>

            <button className='my-5 bg-orange-500 p-2 rounded-full' onClick={() => navigate(`/quiz/${page -1}/1`)}>Bắt đầu</button>

        </div>
    );
}

export default Text;
