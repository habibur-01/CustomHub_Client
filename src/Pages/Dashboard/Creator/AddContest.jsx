
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { ImgUpload } from "../../../api/ImgUpload";
import { axiosSecure } from "../../../api/axiosSecure";
import toast from "react-hot-toast";


const AddContest = () => {
    const { user } = useContext(AuthContext)
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
        const taskInstruction = form.instruction.value
        const endDate = form.endDate.value
        const price = form.price.value
        const prize = form.prize.value
        const img = form.image.files[0]
        const image = await ImgUpload(img)
        const userImage = image?.data?.display_url

        const addContestgData = { contestName, contestType:type, description, taskInstruction, image:userImage, endDate, price, prize , creator:user?.email, status:'pending' }
        console.log(addContestgData)

        await axiosSecure.post("/contest", addContestgData)
        .then(response => {
            console.log('Contest added successfully:', response.data);
            
            if (response?.data?.acknowledged === true) {
                 toast('Contest added successfully')
                 
            }
        })
        .catch(error => {
            console.error('Error adding user:', error);
            toast('Error adding user')
        });


    }
    return (
        <div>


            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body md:w-3/5  md:mx-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleCheckOut}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Name</span>
                        </label>
                        <input type="text" name="name" placeholder="contes name" className="input input-bordered" required />
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
                            onChange={handleContestTypeChange}
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
                        <input type="text" name="description" placeholder="description" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Instruction</span>
                        </label>
                        <input type="text" name="instruction" placeholder="task instruction" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Price</span>
                        </label>
                        <input type="text" name="price" placeholder="contest price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Prize money</span>
                        </label>
                        <input type="text" name="prize" placeholder="prize money" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" name="image" className="input input-bordered" required />

                    </div>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">End date</span>
                        </label>
                        <input type="date" name="endDate" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Add Contest</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContest;