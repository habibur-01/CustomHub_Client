import { Link, useLocation } from "react-router-dom";
import Container from "../../SharedComponent/Container/Container";
import Card from "../../SharedComponent/Card/Card";
import { MdHome } from "react-icons/md";


const SearchData = () => {
    const location = useLocation()
    const searchingData = location.state?.queryData
    const path = location.state?.queryData[0].contestType
    // console.log(location)
    return (
        <div>
            {
                searchingData <= 0 ? <div className="h-[500px] w-full flex flex-col justify-center items-center">
                    <p className="text-2xl font-semibold">There is no data in this category</p>
                    <p className="text-lg font-light">Please write valid one.</p>
                </div> : <Container>
                    <div className="py-6 inline-flex gap-6">
                        <Link to={"/"}><MdHome size={22} /></Link>
                        <Link to={`/contest`}><p>/{path}</p></Link>
                    </div>
                    <div className="grid lg:grid-cols-4 gap-6 my-10">
                        {
                            searchingData?.map(data => <Card key={data?._id} contest={data}></Card>)
                        }
                    </div>
                </Container>

            }

        </div>
    );
};

export default SearchData;