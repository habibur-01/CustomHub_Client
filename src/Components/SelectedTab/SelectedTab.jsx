import { useContext } from "react";
import Card from "../SharedComponent/Card/Card";
import { AuthContext } from "../../Provider/AuthContext";
import { PropTypes } from "prop-types";


const SelectedTab = ({ selectedData }) => {
    const { contestData } = useContext(AuthContext)

    const selected = contestData?.filter(data => data?.contestType === selectedData && data?.status === 'confirmed')

    return (
        <div >
            {
                selected.length == 0 ? <div className="h-[500px] w-full flex justify-center items-center flex-col space-y-2">
                    <p className="text-3xl font-bold">There is no data found in this category</p>
                    <p className="text-base">Please visit another another category</p>
                </div> :
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-10">
                        {selected?.map(data => <Card key={data?._id} contest={data}></Card>)}
                    </div>

            }

        </div>
    );
};
SelectedTab.propTypes = {
    selectedData: PropTypes.string
}

export default SelectedTab;