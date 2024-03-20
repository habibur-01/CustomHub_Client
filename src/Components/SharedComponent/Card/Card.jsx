import { PropTypes } from "prop-types";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const Card = ({ contest }) => {
    const { _id, contestName, description, image, prize, price, endDate, taskInstructions} =contest
    return (
        <div className="w-[320px] bg-slate-100 border-2 shadow-md rounded-lg">

            <div className="w-[320px] h-[200px] rounded-bl-3xl">
                <img className="w-full h-full object-cover rounded-bl-3xl overflow-hidden" src={image} alt="" />
            </div>
            <div className="py-6 text-center px-6">
                <div className="inline-Flex items-center">
                    <h1 className="text-xl font-bold ">{contestName} </h1>
                    <span className="text-xs border-[1px] w-6 mx-auto flex justify-center items-center"><FaUser size={10} /> 10</span>
                </div>
                <p className="text-sm mt-2">
                    {
                        description.slice(0, 100) + "..."

                    }
                </p>
                <Link to={`/contest/${_id}`} state={{_id, contestName, description, image, prize, price, endDate, taskInstructions}}><button className="bg-[#646cff] px-3 py-2 mt-4 font-semibold text-white text-base">Details</button></Link>

            </div>
        </div>
    );
};
Card.propTypes = {
    contest: PropTypes.object
}

export default Card;