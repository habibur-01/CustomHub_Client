
import { useEffect, useState } from "react";
import Container from "../../Components/SharedComponent/Container/Container";
import { axiosSecure } from "../../api/axiosSecure";
import CategoryTab from "../../Components/CategoryTab/CategoryTab";


const AllContest = () => {
    const [contestData, setContestData] = useState([])
    const [confirmedData, setConfirmedData] = useState([])
    

    useEffect(() => {
        axiosSecure.get("/contest")
            .then(response => {
                const data = response.data
                setContestData(data)
            }).catch(error => {
                console.log(error)
            })

    }, [])
    useEffect(() => {
        const result = contestData?.filter(data => data?.status !== 'pending')
        setConfirmedData(result)
    },[contestData])
    // console.log(contestData)
    return (
        <div>
            <Container>
                <h1 className="text-2xl font-bold py-4 border-b-4 mb-6">All Contest</h1>
                <div className="mb-8">
                    <CategoryTab verifiedContest={confirmedData}/>
                </div>
              
            </Container>

        </div>
    );
};

export default AllContest;