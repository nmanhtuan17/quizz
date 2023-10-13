import { useContext } from "react";
import Context from "../store/Context";
import AllQuestion from "../components/AllQuestion";
import { useNavigate } from "react-router-dom";
const Finish = () => {
    const [state, dispatch] = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className="flex flex-col space-y-10 md:max-w-xl md:mx-auto p-5 md:py-10 md:px-10 ">
            <h3 className="text-lg text-center text-neutral-900 font-bold md:text-xl">
                Kết quả
            </h3>
            <h1
                className={`text-xl font-bold mx-auto p-5 rounded-full bg-red-500 md:text-xl text-neutral-100`}
            >
                {state.user_answers_true}/{state.questions.length}
            </h1>
            <div className="text-xs md:text-sm text-neutral-600 font-medium flex flex-col space-y-1">
                <p className="flex justify-between">
                    Correct Answer <span className="text-green-600">{state.user_answers_true}</span>
                </p>
                <p className="flex justify-between">
                    Wrong Answer <span className="text-red-600">{state.user_wrong_answers}</span>
                </p>
            </div>

            <button
                onClick={()=> navigate('/quiz')}
                className="grid place-items-center text-neutral-50 bg-orange-500 rounded-full py-2 hover:text-neutral-50 text-sm font-semibold"

            >
                Back to dashboard
            </button>

            <h3 className="text-center text-neutral-600 font-semibold md:text-lg pt-[50px]">
                Answer
            </h3>
            {state.questions.map((item) => (<AllQuestion id={item.id} question={item} key={item.id} />))}
        </div>
    );
}

export default Finish;
