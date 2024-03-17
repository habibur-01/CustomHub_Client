
import SectionHeader from "../SharedComponent/Header/SectionHeader";
import winnerImage from "../../assets/image/Max-R_Headshot (1).jpg"; // Import winner image
import Container from "../SharedComponent/Container/Container";
// import { contestWinner, participationCount } from "../../utils/contestData"; // Import dynamic data

const ContestSection = () => {
    const bgGradient = {
        background: 'linear-gradient(to right, rgba(82,162,159,0.6), rgba(127,160,153,0.6), rgba(175,165,146,0.6), rgba(203,134,110,0.6))'
    };
    return (
        <Container>
            <div className="contest-section mt-16" style={bgGradient}>
                <SectionHeader
                    title="Join Our Exciting Contest!"
                    subTitle="Participate and Win Amazing Prizes"
                />
                <div className="contest-info flex justify-center">
                    <div className="contest-description bg-[#7e85eb] w-1/3 p-10">
                        <h1 className="text-2xl font-bold pt-4 pb-2 border-b-2 mb-6">Next Contest</h1>
                        <p className="mb-4 font-medium">MOST COMPITION ARE STARTED ON SUNDAYS FROM 10 AM TO APPROXIMATELY 12 PM</p>

                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-4  bg-slate-100 border-2">
                                <div className="contestTime min-w-fit font-bold text-center px-4 border-2">
                                    <p>03</p>
                                    <p>May</p>
                                </div>
                                <div className="contestName px-4">
                                    <p className="font-bold">CodeMaster Challenge</p>
                                    <p className="text-sm">Creator: Abdus Sattar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4  bg-slate-100 border-2">
                                <div className="contestTime min-w-fit font-bold text-center px-4 border-2">
                                    <p>03</p>
                                    <p>May</p>
                                </div>
                                <div className="contestName px-4">
                                    <p className="font-bold">CodeMaster Challenge</p>
                                    <p className="text-sm">Creator: Abdus Sattar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4  bg-slate-100 border-2">
                                <div className="contestTime min-w-fit font-bold text-center px-4 border-2">
                                    <p>03</p>
                                    <p>May</p>
                                </div>
                                <div className="contestName px-4">
                                    <p className="font-bold">CodeMaster Challenge</p>
                                    <p className="text-sm">Creator: Abdus Sattar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4  bg-slate-100 border-2">
                                <div className="contestTime min-w-fit font-bold text-center px-4 border-2">
                                    <p>03</p>
                                    <p>May</p>
                                </div>
                                <div className="contestName px-4">
                                    <p className="font-bold">CodeMaster Challenge</p>
                                    <p className="text-sm">Creator: Abdus Sattar</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="contest-images p-10 w-1/2">
                        <h2 className="text-2xl font-bold pt-4 pb-2 mb-6"><span className="py-2 border-b-4 border-[#646ffc]">C</span>ongratulations to Our Contest Winner!</h2>
                        {/* <img src={contestImage} alt="Contest" className="contest-image" /> */}
                        <p className="mb-4 font-medium">WE ARE VERY EXCITED TO GO OVER THIS EXCEPTIONAL TOURNAMENT THAT LITERALLY LEFT THE PLAYERS AND THE CROWD BREATHLESS!</p>
                        <div className="winner-info flex justify-around">


                            <div className="border-2">
                                <div className="w-[224px] h-[226px]">
                                    <img src={winnerImage} className="w-full h-full object-cover overflow-hidden" alt="winner image" />
                                </div>
                                <div className="bg-[#152229] text-white text-center py-2 hover:bg-[#7e85eb] hover:text-black">
                                    <p className="font-bold">Alex Morgan</p>
                                    <p className="text-xs">Winner of CodeMaster Challenge</p>
                                </div>
                            </div>
                            
                            <div className="border-2">
                                <div className="w-[224px] h-[226px]">
                                    <img src={winnerImage} className="w-full h-full object-cover overflow-hidden" alt="winner image" />
                                </div>
                                <div className="bg-[#152229] text-white text-center py-2 hover:bg-[#7e85eb] hover:text-black">
                                    <p className="font-bold">Alex Morgan</p>
                                    <p className="text-xs">Winner of CodeMaster Challenge</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="participation-count text-center py-10">
                    <p className="font-bold">Join now and be a part of our growing community!</p>
                    <p>Contest Participation Count: 25</p>
                </div>
            </div>
        </Container>
    );
};

export default ContestSection;
