import { useEffect, useState } from "react";
import SectionHeader from "../SharedComponent/Header/SectionHeader";
import Card from "../SharedComponent/Card/Card";
import Container from "../SharedComponent/Container/Container";
import { axiosSecure } from "../../api/axiosSecure";


const PopularContest = () => {
    const [contestData, setContestData] = useState([])

    useEffect(() => {
        axiosSecure.get("/contest")
            .then(response => 
                {if (Array.isArray(response.data)) {
                setContestData(response.data);
            } else {
                // If not an array, convert to an array with a single element
                setContestData([response.data]);
            }})
            .catch(error => console.log(error))
    }, [])
    console.log(Array.isArray(contestData) )
    return (
        <Container>
            <div>
                <SectionHeader title={'Popular Contest'} subTitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, sed.'} />
                <div className="grid lg:grid-cols-5 lg:gap-6 md:flex flex-wrap grid-cols-1 mx-10">
                    {
                        contestData?.slice(0,4).map(contest => <Card key={contest.contestName} contest={contest} />)
                    }
                </div>



            </div>
        </Container>
    );
};

export default PopularContest;