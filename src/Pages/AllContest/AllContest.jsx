
import { useEffect, useState } from "react";
import Container from "../../Components/SharedComponent/Container/Container";
import { axiosSecure } from "../../api/axiosSecure";
import Card from "../../Components/SharedComponent/Card/Card";
// import SectionHeader from "../../Components/SharedComponent/Header/SectionHeader";


const AllContest = () => {
    const [contestData, setContestData] = useState([])

    useEffect(() => {
        axiosSecure.get("/contest")
            .then(response => {
                const data = response.data
                setContestData(data)
            }).catch(error => {
                console.log(error)
            })

    }, [])
    // console.log(contestData)
    return (
        <div>
            <Container>
                <h1 className="text-2xl font-bold py-4 border-b-4 mb-6">Al Contest</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-5">
                    {
                        contestData.map(contest => <Card key={contest._id} contest={contest}/>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default AllContest;