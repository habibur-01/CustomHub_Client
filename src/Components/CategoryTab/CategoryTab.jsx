import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Container from "../SharedComponent/Container/Container";
import { useState } from "react";
import SelectedTab from "../SelectedTab/SelectedTab";
import Card from "../SharedComponent/Card/Card";
import { PropTypes } from "prop-types";
import "./style.css"


const CategoryTab = ({ verifiedContest }) => {
    const [tabIndex, setTabIndex] = useState(0)
    

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
                                verifiedContest?.map(contest => <Card key={contest._id} contest={contest} />)
                            }
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
