import { useEffect, useState } from "react";
import { axiosSecure } from "../../../api/axiosSecure";
import { Link } from "react-router-dom";


const ManageUsers = () => {
    const [allUser, setAllUser] = useState()

    useEffect(() => {
        axiosSecure.get(`/users`)
            .then(res => {
                setAllUser(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [])
    console.log(allUser)
    const handleContestDelete = (id) => {
        axiosSecure.delete(`/users/${id}`)
            .then((response) => {
                console.log('Item deleted successfully',response);
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
                            <th>User Name</th>
                            <th>User Email</th>
                            
                            <th>User Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUser.length < 0 ? <tr className="row-span-7">
                                <div className="flex h-[700px] justify-center items-center space-y-4">
                                    <h1 className="text-4xl font-bold">Here has not any usert</h1>
                                    
                                </div>
                            </tr> : allUser.map(data => <tr key={data._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold">{data?.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-sm">{data?.email}</span>
                                </td>
                                <td>{data?.price
                                }</td>
                                <th className="space-x-2">
                                    <button onClick={() => handleContestDelete(data._id)} className="btn btn-ghost text-white btn-sm text-xs bg-red-400">Delete</button>
                                    <Link to={`/dashboard/manageuser/${data?._id}`} state={data}><button className="btn btn-ghost text-white btn-sm text-xs bg-[#646ffc]">Update</button></Link>
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

export default ManageUsers;