import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { axiosSecure } from "../../../api/axiosSecure";
import toast from "react-hot-toast";


const ManageContest = () => {
    const { contestData } = useContext(AuthContext)
    const [allContest, setAllcontest] = useState(contestData)
    // const [isconfirmed, setIsConfirmed] = useState(false)

    const handleContestDelete = (id) => {
        axiosSecure.delete(`/contest/${id}`)
            .then((response) => {
                console.log('Item deleted successfully', response);
                if (response?.data?.deletedCound > 0) {
                    const remaining = contestData?.filter(data => data._id !== id)
                    setAllcontest(remaining)
                    toast('Item deleted successfully')
                }

            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
    }

    const handleContestData = (id) => {
        // setIsConfirmed(true)
        
            try {
                // Upload new photo if provided


                // Send PATCH request to update user data
                axiosSecure.patch(`/contest/${id}`, { status: 'confirmed' });
                const remaining = contestData?.filter(data => data._id !== id)
                setAllcontest(remaining)

                toast('contest data updated successfully!');
            } catch (error) {
                console.error('Error updating contest data:', error);
                // Handle error, show error message to user, etc.
            }
        

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
                            <th>Creator</th>
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
                             allContest?.map(data => <tr key={data._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold">{data?.creator}</div>

                                        </div>
                                    </div>
                                </td>
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
                                <td><span className="badge badge-ghost badge-sm">{data?.price}</span></td>
                                <th className="space-x-2">
                                    <button onClick={() => handleContestDelete(data._id)} className="btn btn-ghost text-white btn-sm text-xs bg-red-400">Delete</button>
                                    <button onClick={() => handleContestData(data._id)} className={`btn btn-ghost text-white  btn-sm text-xs bg-[#646ffc] ${(data?.status === 'confirmed') && 'btn-disabled'}`}>{data?.status === 'confirmed' ? 'Confirmed' : 'Confirm'}</button>
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

export default ManageContest;