
import { useContext, useState } from "react";
import { axiosSecure } from "../../../api/axiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthContext";
import { useLocation } from "react-router-dom";


const UpdateContest = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const contest = location?.state
    console.log(location)
    const [contestType, setContestType] = useState('');
    const handleContestTypeChange = (event) => {
        setContestType(event.target.value);
    };
    // const { email, displayName } = user;
    // console.log(email)
    // const checkoutService = useLoaderData()
    // const { room_no, img1, type, rent } = checkoutService;
    // console.log(checkoutService)
    // console.log(user)

    const handleCheckOut = async (e) => {
        e.preventDefault()
        const form = e.target
        const contestName = form.name.value
        const type = contestType
        const description = form.description.value
        const taskInstructions = form.instruction.value
        const endDate = form.endDate.value
        const price = form.price.value
        const prize = form.prize.value
        
        

        const updateContestData = { contestName, contestType: type, description, taskInstructions,  endDate, price, prize, creator: user?.email }
        // console.log(addContestgData)

        try {
            // Upload new photo if provided
            

            // Send PATCH request to update user data
            await axiosSecure.patch(`/contest/${contest?._id}`, updateContestData);

            toast('contest data updated successfully!');
        } catch (error) {
            console.error('Error updating contest data:', error);
            // Handle error, show error message to user, etc.
        }


    }
    return (
        <div>


            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body md:w-3/5  md:mx-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleCheckOut}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={contest.contestName} placeholder="contes name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Type</span>
                        </label>
                        <select
                            className="input input-bordered"
                            name="room_type"
                            id="cars"
                            value={contestType}
                            onChange={handleContestTypeChange} defaultValue={contest.contestType}
                        >
                            <option value="">Select Contest Type</option>
                            <option value="business">Business Contest</option>
                            <option value="medical">Medical Contest</option>
                            <option value="article">Article Writing</option>
                            <option value="gaming">Gaming Contest</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={contest.description} placeholder="description" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Instruction</span>
                        </label>
                        <input type="text" name="instruction" defaultValue={contest.taskInstructions} placeholder="task instruction" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={contest.price} placeholder="contest price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Prize money</span>
                        </label>
                        <input type="text" name="prize" defaultValue={contest.prize} placeholder="prize money" className="input input-bordered" required />

                    </div>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">End date</span>
                        </label>
                        <input type="date" name="endDate" defaultValue={contest.endDate} className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Add Contest</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateContest;