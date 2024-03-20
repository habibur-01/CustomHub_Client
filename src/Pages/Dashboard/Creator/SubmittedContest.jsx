import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../../../api/axiosSecure";
import { AuthContext } from "../../../Provider/AuthContext";



const SubmittedContest = () => {
    const [submittedTask, setSubmittedTask] = useState([])
    const { user } = useContext(AuthContext)


    useEffect(() => {
        axiosSecure.get("/submittedTask")
            .then(response => setSubmittedTask(response.data))
            .catch(error => console.log(error))
    })

    const res = submittedTask.filter(data => data?.creator === user?.email)
    
    const handleSelectWinner =(examinee, contestName)=>{
        const winner = {examinee, contestName, status:'winner'}
        axiosSecure.post("/winner", winner)
        .then(response=>{
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })

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
                            <th>Examinee</th>
                            <th>Task Proof</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            res.length < 0 ? <tr className="row-span-7">
                                <div className="flex h-[700px] justify-center items-center space-y-4">
                                    <h1 className="text-4xl font-bold">There are not any examinee</h1>
                                    <p>Please make any contest first.</p>
                                </div>
                            </tr> : res.map(data => <tr key={data._id}>
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

                                    <span className="badge badge-ghost badge-sm">{data?.examinee}</span>
                                </td>
                                <td>{data?.pdf
                                }</td>
                                <th className="space-x-2">
                                    
                                    <button onClick={() => handleSelectWinner(data?.examinee, data?.contestName)} className="btn btn-ghost text-white btn-sm text-xs bg-[#646ffc]">Select Winner</button>
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

export default SubmittedContest;