import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import win from "../../assets/image/win.jpg";
import Container from "../../Components/SharedComponent/Container/Container";

const ContestDetails = () => {
    // const { _id } = useParams();
    const location = useLocation();
    const [timeDifference, setTimeDifference] = useState();
    
    // State for remaining time
    const [remainingTime, setRemainingTime] = useState(null);
    const [nextDate, setNextDate] = useState(null)

    useEffect(() => {
        // Calculate remaining time
        const calculateRemainingTime = () => {
            const regEndDate = new Date(location?.state?.endDate);
            const endDate = new Date(location?.state?.endDate);
            const now = new Date();
            const difference = regEndDate - now;
            setTimeDifference(difference)
             // Calculate next date
             const nextDay = new Date(endDate);
             nextDay.setDate(endDate.getDate() + 1);
             setNextDate(nextDay);

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setRemainingTime({ days, hours, minutes, seconds });
            } else {
                // Contest has ended
                setRemainingTime({ d: 0, h: 0, m: 0, s: 0 });
            }
        };

        // Update remaining time every second
        const interval = setInterval(calculateRemainingTime, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [location]);

    return (
        <Container>
            <div className="min-h-fit pb-10">
                <div className="w-full h-[400px]">
                    <img src={win} alt="" className="w-full h-full object-center overflow-hidden" />
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='col-span-2'>
                        <h1 className='text-3xl font-semibold p-4 border-t-rose-400 border border-r-0 border-l-0 border-b-rose-400 my-6'>Contest Descriptions:</h1>
                        <p className='p-3 md:p-3'>{location?.state?.description}<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia natus expedita tempora quae, voluptas officiis harum sapiente animi, voluptatem quibusdam, aperiam a sequi dignissimos!</span>
                        </p>
                        <h1 className='text-3xl font-semibold p-4 border-t-rose-400 border border-r-0 border-l-0 border-b-rose-400 my-6'>Task Instruction:</h1>
                        <p className='p-3 md:p-3'>{location?.state?.taskInstructions}
                        </p>
                        <div className='mt-8 w-[300px] h-[200px] border-2 mr-4'>
                            {/* <h1 className='text-xl mt-4 font-medium'>Give your reviews</h1> */}
                            <img src={location?.state?.image} className="w-full h-full object-cover overflow-hidden rounded-md" alt="Contest image" />
                        </div>
                        <div className='mt-8 w-[300px] h-[200px]  mr-4'>
                            {/* <h1 className='text-xl mt-4 font-medium'>Give your reviews</h1> */}
                            {
                                timeDifference < 0 ? <div>
                                    <h1 className="text-2xl font-bold">Winner is</h1>
                                    <div className="mt-8 w-[300px] h-[200px] border-2 mr-4">
                                        <img src={location?.state?.image} className="w-full h-full object-cover overflow-hidden rounded-md" alt="Contest image" />
                                    </div>
                                </div> : ""
                            }

                        </div>

                    </div>

                    <div className='md:m-3'>
                        <div className='bg-[#151515] text-white mx-2 md:ml-0 mt-5 rounded-xl px-8 py-10 relative'>
                            <div className="absolute top-0 right-0">
                                {remainingTime  && (
                                    <p className='text-base p-2 bg-red-400'> {remainingTime.days}d : {remainingTime.hours}h : {remainingTime.minutes}m : {remainingTime.seconds}s</p>
                                )}
                            </div>
                            <div className="mt-2">
                                <h1 className='text-3xl font-bold mb-5 '>Contest Details</h1>
                                <div className='space-y-5 font-bold'>
                                    <p className='text-base '>Contest Name:{location?.state?.contestName}</p>
                                    <p className='text-base '>Contest Prize: {location?.state?.prize} $</p>
                                    <p className='text-base '>Contest Price: {location?.state?.price} $</p>
                                    
                                    <p className='text-base '>End Date: {location?.state?.endDate}</p>

                                    <p className='text-base '>Participant: {location?.state?.endDate}</p>
                                </div>
                                <div>
                                    {
                                        timeDifference<0 ? <button disabled={nextDate} className="bg-[#646cff] px-3 py-2 mt-4 w-full h-14 font-semibold text-white text-base">Open</button>:
                                        <Link to={"/payment"} state={{ price: location?.state?.price, id: location?.state?._id, contestName: location?.state?.contestName }}><button className="bg-[#646cff] px-3 py-2 mt-4 w-full h-14 font-semibold text-white text-base">Registration</button></Link>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 border-t-4 container mx-auto '>
                    <h1 className='text-xl mt-4 font-medium pl-4 md:pl-4'>Ratings & Reviews</h1>
                    <div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContestDetails;
