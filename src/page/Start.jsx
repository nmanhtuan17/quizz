import { useNavigate } from "react-router-dom";
import SiteBar from "../components/navbar/SiteBar";
import Test from '../components/Test'
const Start = () => {
    return (
        <div className="flex">
            <SiteBar />
            <div className="grow flex flex-wrap">
                <Test idx={1} status='Chưa hoàn thành' />
                <Test idx={2} status='Hoàn thành' />
                <Test idx={3} status='Hoàn thành' />
            </div>
        </div>

    );
}

export default Start;
