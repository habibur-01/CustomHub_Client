import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../../../api/axiosSecure";
import { AuthContext } from "../../../Provider/AuthContext";
import Container from "../../../Components/SharedComponent/Container/Container";


const Participated = () => {
    const [participated, setParticipated] = useState([])
    const [registeredData, setRegisteredData] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(participated)
    useEffect(() => {
        axiosSecure.get('/payment')
            .then(response => {
                // const data = response
                // console.log(response.data)
                setParticipated(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        const registeredByUser = participated?.filter(contest => user?.email === contest.email);
        if (registeredByUser) {
            setRegisteredData(registeredByUser);
        }
    }, [participated, user]);

    console.log('registeredData', registeredData);

    return (
        <div>
            <Container>
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
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Open Exam</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                registeredData?.length < 0 ? <tr className="row-span-7">
                                    <div className="flex h-[700px] justify-center items-center space-y-4">
                                        <h1 className="text-4xl font-bold">You don not have any regestered contest</h1>
                                        <p>Please make a registration for any contest first.</p>
                                    </div>
                                </tr> : registeredData?.map(data => <tr key={data._id}>
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

                                        <span className="badge badge-ghost badge-sm">{data?.transactionId}</span>
                                    </td>
                                    <td>{data?.price
                                    }</td>
                                    <th>
                                        <button className="btn btn-ghost text-white btn-sm text-xs bg-[#646ffc]">Open</button>
                                    </th>

                                </tr>)
                            }


                        </tbody>
                        {/* foot */}
                        <tfoot>

                        </tfoot>

                    </table>
                </div>

            </Container>
        </div>
    );
};

export default Participated;