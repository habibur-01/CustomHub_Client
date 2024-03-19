import { useContext } from "react";
import Container from "../../../Components/SharedComponent/Container/Container";
import { AuthContext } from "../../../Provider/AuthContext";
import winner from "../../../assets/image/13588.jpg"


const WinningContest = () => {
    const { user, contestData } = useContext(AuthContext)

    return (
        <Container>
            <div>
                <h1 className="text-xl font-normal">Total Compitition Won</h1>
                <div className="w-80 h-72 border-4 my-6">
                    <img src={winner} className="w-full h-full object-cover overflow-hidden" alt="" />
                </div>

            </div>
        </Container>
    );
};

export default WinningContest;