
import { useEffect, useState } from "react";
import Container from "../../Components/SharedComponent/Container/Container";
import { axiosSecure } from "../../api/axiosSecure";
import CategoryTab from "../../Components/CategoryTab/CategoryTab";
import "./style.css"

const AllContest = () => {
    const [contestData, setContestData] = useState([])
    const [confirmedData, setConfirmedData] = useState([])
    // const [currentPage, setCurrentPage] = useState(0)
    // const [itemsPerPage, setItemsPerPage] = useState(8)

    // const numOfPages = Math.ceil(confirmedData?.length / itemsPerPage)
    // const pages = [...Array(numOfPages).keys()]




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
    }, [contestData])

    // const handleItemsPerPage = (e) => {
    //     const num = parseInt(e.target.value)
    //     setItemsPerPage(num)
    //     setCurrentPage(0)
    // }

    // const handlePrevPage = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }

    // const handleNextPage = () => {
    //     if (currentPage < pages.length - 1) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }
    // // Calculate pagination range
    // const startIndex = currentPage * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const paginatedData = confirmedData.slice(startIndex, endIndex);

    // console.log(contestData)
    return (
        <div>
            <Container>
                <h1 className="text-2xl font-bold py-4 border-b-4 mb-6">All Contest</h1>
                <div className="mb-8">
                    <CategoryTab verifiedContest={confirmedData} />
                    
                </div>


            </Container>

        </div>
    );
};

export default AllContest;