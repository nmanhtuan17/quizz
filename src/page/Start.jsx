import { useNavigate } from "react-router-dom";
const Start = () => {
    const navigate = useNavigate()
    return (
        <div className='w-1/3 mx-auto text-center bg-orange-200 rounded-md py-5'>
            <h1 className='text-lg font-semibold '>Trắc nhiệm thi bằng lái xe</h1>
            <div className='my-3'>Câu hỏi: 15</div>
            <div>Thời gian: 60p</div>

            <button className='my-5 bg-orange-500 p-2 rounded-full' onClick={()=> navigate('/quiz/1')}>Bắt đầu</button>

        </div>
    );
}

export default Start;
