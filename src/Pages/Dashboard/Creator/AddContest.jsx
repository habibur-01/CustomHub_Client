
import { useContext, } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

import 'react-toastify/dist/ReactToastify.css';


const AddContest = () => {
    const { user } = useContext(AuthContext)
    // const { email, displayName } = user;
    // console.log(email)
    // const checkoutService = useLoaderData()
    // const { room_no, img1, type, rent } = checkoutService;
    // console.log(checkoutService)
    // console.log(user)

    const handleCheckOut = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const roomType = form.type.value
        const room_no = form.roomno.value
        const rent = form.rent.value
        const bookingdate = form.date.value
        const checkin = form.checkin.value
        const checkout = form.checkout.value
        const img = form.image.value

        const bookingData = { name, email, roomType, room_no, img, rent, bookingdate, checkin, checkout }
        console.log(bookingData)

        // fetch('https://b8a11-server-side-habibur-01.vercel.app/booking', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(bookingData)

        // })
        //     .then(result => {
        //         console.log(result)
        //         toast('Your booking successfull')
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })


    }
    return (
        <div>
            
            <div className="h-[400px] bg-cover bg-center  rounded-lg" >
                <div className=" relative h-full rounded-lg flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] bg-transparent " >
                    <div className="lg:w-1/3 ml-20 space-y-7">
                        <h1 className="text-4xl text-[#FFF] text-center font-semibold">Book Your Room</h1>

                    </div>


                </div>
            </div>
            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body md:w-3/5  md:mx-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleCheckOut}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Type</span>
                        </label>
                        <select name="room_type" id="cars">
                            <option value="room_type">Business Contest</option>
                            <option value="room_type"> Medical Contest</option>
                            <option value="room_type">Article Writing</option>
                            <option value="room_type">Gaming Contest</option>
                            
                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Description</span>
                        </label>
                        <input type="text" name="description"  placeholder="room no" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Instruction</span>
                        </label>
                        <input type="text" name="instruction"  placeholder="room no" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Price</span>
                        </label>
                        <input type="text" name="price"  placeholder="rent" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Prize money</span>
                        </label>
                        <input type="text" name="prize"  placeholder="rent" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" name="image"  placeholder="rent" className="input input-bordered" required />

                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Start Date</span>
                        </label>
                        <input type="date" name="checkin" placeholder="check in" className="input input-bordered" required />

                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">End date</span>
                        </label>
                        <input type="date" name="checkout" placeholder="check out" className="input input-bordered" required />

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