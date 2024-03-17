import { useEffect, useState } from "react";
import SectionHeader from "../SharedComponent/Header/SectionHeader";
import Card from "../SharedComponent/Card/Card";
import Container from "../SharedComponent/Container/Container";


const PopularContest = () => {
    const [contestData, setContestData] = useState([])

    useEffect(() => {
        fetch("/contest.json")
            .then(res => res.json())
            .then(data => setContestData(data))
    }, [])
    console.log(contestData)
    return (
        <Container>
            <div>
                <SectionHeader title={'Popular Contest'} subTitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, sed.'} />
                <div className="grid lg:grid-cols-5 lg:gap-6 md:flex flex-wrap grid-cols-1 mx-10">
                    {
                        contestData.slice(0, 5).map(contest => <Card key={contest.contestName} contest={contest} />)
                    }
                </div>



            </div>
        </Container>
    );
};

export default PopularContest;