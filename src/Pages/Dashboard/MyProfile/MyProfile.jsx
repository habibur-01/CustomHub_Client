import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { CiLock, CiUnlock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineCamera } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { ImgUpload } from "../../../api/ImgUpload";
import { axiosSecure } from "../../../api/axiosSecure";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const [isPassView, setIsPassView] = useState(false)
    const [userData, setUserData] = useState([])


    useEffect(() => {
        axiosSecure.get(`/users/?email=${user?.email}`)
            .then(res => {
                setUserData(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [user?.email])
    console.log(userData)


    const handleSignUp = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.files[0]

        // const image = await ImgUpload(photo)
        // const userImage = image?.data?.display_url
        // console.log(userImage)

        // Create an object with updated user data
        const updatedUserData = {
            name: name,
            
            // Add other fields you want to update
        };

        try {
            // Upload new photo if provided
            if (photo) {
                const image = await ImgUpload(photo);
                updatedUserData.userImage = image?.data?.display_url;
            }

            // Send PATCH request to update user data
            await axiosSecure.patch(`/users/${userData[0]?._id}`, updatedUserData);

            console.log('User profile updated successfully!');
        } catch (error) {
            console.error('Error updating user profile:', error);
            // Handle error, show error message to user, etc.
        }
    }

    console.log(user)

    return (
        <div className="lg:flex lg:justify-around items-center">
            <div className="p-6 border-2">
                <div className="w-48 h-48">
                    <img src={userData[0]?.userImage} className="w-full h-full object-cover overflow-hidden" alt="profile picture" />
                </div>
                <div className="text-normal py-5 border-b-4 border-[#c1c0ec]">
                    <p className="text-base font-bold">{userData[0]?.name}</p>
                    <p className="text-sm font-light py-1">{user?.email}</p>
                </div>
                <div className="py-5 ">
                    <p className="text-base font-bold pb-5">All Time Success Rate</p>
                    <p className="text-sm font-medium">Total attemted contest: 5</p>
                    <p className="text-sm font-medium">Win contest: 1</p>
                </div>
                {/* <div>
                    <Doughnut
                        data={chartData}
                        
                    />
                </div> */}

            </div>
            <div>
                <form onSubmit={handleSignUp} action="" className="m-2 space-y-4">
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email">Your name</label>
                        <div className="inputField inline-flex items-center relative">
                            <input type="text" name="name" defaultValue={userData[0]?.name} id="name" placeholder="type your name" />
                            <div className="absolute right-2">
                                <FaRegUser size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email">Your photo</label>
                        <div className="inputField inline-flex items-center relative">
                            <input type="file" name="photo" id="photo" placeholder="" accept="image/jpeg, image/png" />
                            <div className="absolute right-2">
                                <AiOutlineCamera size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email">Email address</label>
                        <div className="inputField inline-flex items-center relative">
                            <input type="email" name="email" id="email" value={userData[0]?.email} placeholder="type your email" />
                            <div className="absolute right-2">
                                <MdOutlineMail size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="inputField flex flex-col space-y-4">
                        <label htmlFor="email">Password</label>
                        <div className="inline-flex items-center relative">
                            <input type={isPassView ? "text" : "password"} name="password" value={userData[0]?.password} id="password" autoComplete="off" placeholder="type password" />
                            <div onClick={() => setIsPassView(!isPassView)} className="absolute right-2">
                                {isPassView ? <CiUnlock size={20} /> : <CiLock size={20} />}
                            </div>
                        </div>
                    </div>
                    <div className="w-full btn1">
                        <button type="submit">Edit profile</button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default MyProfile;