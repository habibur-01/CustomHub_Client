import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../../api/axiosSecure";
import toast from "react-hot-toast";


const MyCreation = () => {
    const { user, contestData } = useContext(AuthContext)
    const [createContest, setCreateContest] = useState([])

    useEffect(() => {
        const res = contestData.filter(data => data?.creator === user?.email)
        console.log(res)
        setCreateContest(res)

    }, [contestData, user?.email])

    const handleContestDelete = (id) => {
        axiosSecure.delete(`/contest/${id}`)
            .then((response) => {
                console.log('Item deleted successfully',response);
                toast('Contest deleted successfully')
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
    }
    return (
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
                            <th>Prize</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            createContest?.length <= 0 ? <tr className="row-span-7">
                                <div className="flex h-[700px] justify-center items-center space-y-4">
                                    <h1 className="text-4xl font-bold">You don not make any  contest</h1>
                                    <p>Please make any contest first.</p>
                                </div>
                            </tr> : createContest?.map(data => <tr key={data._id}>
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

                                    <span className="badge badge-ghost badge-sm">{data?.prize}</span>
                                </td>
                                <td>{data?.price
                                }</td>
                                <th className="space-x-2">
                                    <button onClick={() => handleContestDelete(data._id)} className="btn btn-ghost text-white btn-sm text-xs bg-red-400">Delete</button>
                                    <Link to={`/dashboard/mycontest/${data?._id}`} state={data}><button className="btn btn-ghost text-white btn-sm text-xs bg-[#646ffc]">Update</button></Link>
                                </th>

                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                    <tfoot>

                    </tfoot>

                </table>
            </div>

        </div>
    );
};

export default MyCreation;