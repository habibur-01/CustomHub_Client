import { useEffect, useState } from "react";
import { axiosSecure } from "../../../api/axiosSecure";
import toast from "react-hot-toast";



const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    // const [totalUsers, setTotalUsers] = useState([])

    useEffect(() => {
        axiosSecure.get(`/users`)
            .then(res => {
                console.log(res.data)
                setAllUsers(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [])

    const users = allUsers.filter(data => data.role != "admin")
    setAllUsers(users)

    console.log(Array.isArray(users))
    const handleContestDelete = (id) => {
        axiosSecure.delete(`/users/${id}`)
            .then((response) => {
                if (response.data?.deletedCount > 0) {
                    const remaining = allUsers?.filter(data => data._id !== id)
                    setAllUsers(remaining)
                    toast('User deleted successfully')
                }
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
                        {/* {totalUsers.length} */}
                        {/* row 1 */}
                        {
                            allUsers?.length <= 0 ? <tr className="row-span-7">
                                <div className="flex h-[700px] justify-center items-center space-y-4">
                                    <h1 className="text-4xl font-bold">Here has not any usert</h1>

                                </div>
                            </tr> :
                                allUsers?.map(data => <tr key={data._id}>
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
                                    <td>{data?.role
                                    }</td>
                                    <th className="space-x-2">
                                        <button onClick={() => handleContestDelete(data._id)} className="btn btn-ghost text-white btn-sm text-xs bg-red-400">Delete</button>

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