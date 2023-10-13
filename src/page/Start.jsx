import { useNavigate } from "react-router-dom";
import SiteBar from "../components/navbar/SiteBar";
import Test from '../components/Test'
const Start = () => {
    return (
        <div className="flex">
            <SiteBar />
            <div className="grow flex flex-wrap">
                <Test idx={1} status='Chưa hoàn thành' page={1} />
                <Test idx={2} status='Hoàn thành' page={2} />
            </div>
        </div>

    );
}

export default Start;
