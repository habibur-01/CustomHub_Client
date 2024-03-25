import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Container from "../SharedComponent/Container/Container";
import { useState } from "react";
import SelectedTab from "./SelectedTab/SelectedTab";
import Card from "../SharedComponent/Card/Card";
import { PropTypes } from "prop-types";
import "./style.css"


const CategoryTab = ({ verifiedContest }) => {
    const [tabIndex, setTabIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(8)

    const numOfPages = Math.ceil(verifiedContest?.length / itemsPerPage)
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
    const paginatedData = verifiedContest.slice(startIndex, endIndex);



    // console.log(location)

    return (
        <div>
            <Container>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="border-none">
                        <Tab>All Contest</Tab>
                        <Tab>Programming</Tab>
                        <Tab>Technology</Tab>
                        <Tab>Article</Tab>
                        <Tab>Gaming</Tab>
                        <Tab>Design</Tab>
                        <Tab>Buisness</Tab>
                        <Tab>Medical</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 my-10">
                            {
                                paginatedData?.map(contest => <Card key={contest._id} contest={contest} />)
                            }

                        </div>
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
                    </TabPanel>
                    <TabPanel><SelectedTab selectedData={'programming'}></SelectedTab></TabPanel>
                    <TabPanel><SelectedTab selectedData={'technology'}></SelectedTab></TabPanel>
                    <TabPanel><SelectedTab selectedData={'article'}></SelectedTab></TabPanel>
                    <TabPanel><SelectedTab selectedData={'gaming'}></SelectedTab></TabPanel>
                    <TabPanel><SelectedTab selectedData={'design'}></SelectedTab></TabPanel>
                    <TabPanel><SelectedTab selectedData={'buisness'}></SelectedTab></TabPanel>
                    <TabPanel><SelectedTab selectedData={'medical'}></SelectedTab></TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};

CategoryTab.propTypes = {
    verifiedContest: PropTypes.array
}

export default CategoryTab;
