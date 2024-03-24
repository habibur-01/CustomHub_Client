import { useContext, useEffect, useState } from "react";
import Container from "../../../Components/SharedComponent/Container/Container";
import { AuthContext } from "../../../Provider/AuthContext";
import winnerpic from "../../../assets/image/13588.jpg"
import { axiosSecure } from "../../../api/axiosSecure";


const WinningContest = () => {
    const { user } = useContext(AuthContext)
    const [winnerData, setWinnerData] = useState([])

    useEffect(() => {
        axiosSecure.get("/winner")
            .then(response => setWinnerData(response.data))
            .catch(error => console.log(error))
    }, [])

    const winner = winnerData?.filter(data => data?.examinee === user?.email)

    return (
        <Container>
            <div>
                <h1 className="text-xl font-normal">Total Compitition Won</h1>
                <div className="w-80 h-72 border-4 my-6">
                    <img src={winnerpic} className="w-full h-full object-cover overflow-hidden" alt="" />
                </div>
                <div>
                    {
                        winner?.length <= 0 ? <p className="font-bold">You do not win any contest yet.</p> : <p className="font-bold">Your total success: <span>{winner?.length}</span></p>
                    }
                    <div>
                        <div className="overflow-x-auto py-10">
                            <table className="table ">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Contest Name</th>
                                        <th>Status</th>
                                        
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        winner?.map(data => <tr key={data._id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">

                                                    <div>
                                                        <div className="font-bold">{data?.contestName}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>

                                                <span className="badge badge-ghost badge-sm">{data?.status}</span>
                                            </td>
                                            
                                           

                                        </tr>)
                                    }


                                </tbody>
                                {/* foot */}
                                <tfoot>

                                </tfoot>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default WinningContest;