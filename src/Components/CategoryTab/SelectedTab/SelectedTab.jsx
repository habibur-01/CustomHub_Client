import { useContext, useState } from "react";
import Card from "../../SharedComponent/Card/Card";
import { AuthContext } from "../../../Provider/AuthContext";
import { PropTypes } from "prop-types";


const SelectedTab = ({ selectedData }) => {
    const { contestData } = useContext(AuthContext)
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(8)

    const selected = contestData?.filter(data => data?.contestType === selectedData && data?.status === 'confirmed')

    const numOfPages = Math.ceil(selected?.length / itemsPerPage)
    const pages = [...Array(numOfPages).keys()]


    const handleItemsPerPage = (e) => {
        const num = parseInt(e.target.value)
        setItemsPerPage(num)
        setCurrentPage(0)
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    // Calculate pagination range
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = selected.slice(startIndex, endIndex);

    return (
        <div >
            {
                selected.length == 0 ? <div className="h-[500px] w-full flex justify-center items-center flex-col space-y-2">
                    <p className="text-3xl font-bold">There is no data found in this category</p>
                    <p className="text-base">Please visit another another category</p>
                </div> :
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-10">
                        {paginatedData?.map(data => <Card key={data?._id} contest={data}></Card>)}
                    </div>

            }
            <div>

                <button className="btn mr-2" disabled={currentPage === 0} onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button className={`btn mr-2 ${currentPage === page && 'selected'}`} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                }
                <button className="btn mr-2" disabled={currentPage === pages.length - 1} onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={8}>8</option>

                </select>
            </div>

        </div>
    );
};
SelectedTab.propTypes = {
    selectedData: PropTypes.string
}

export default SelectedTab;