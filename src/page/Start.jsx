
import SiteBar from "../components/navbar/SiteBar";
import Test from '../components/Test'
const Start = () => {
    return (
        <div className="flex">
            <SiteBar />
            <div className="grow flex flex-wrap">
                <Test idx={1} page={1} />
                <Test idx={2} page={2} />
            </div>
        </div>

    );
}

export default Start;
