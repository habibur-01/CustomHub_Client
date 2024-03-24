import { useState } from 'react';
import banner from '../../assets/image/contestjpg.jpg';
import Container from '../SharedComponent/Container/Container';
import './Banner.css';
import { FaSearch } from 'react-icons/fa';
import { axiosSecure } from '../../api/axiosSecure';
import { Link, useNavigate} from 'react-router-dom';



const Banner = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [queryData, setQueryData] = useState([])
    const navigate = useNavigate()
    console.log(queryData)
    console.log(searchQuery)

    const handleSearchQuery = async () => {
        try {
            const response = await axiosSecure.get(`/contest/?contestType=${searchQuery}`);
            console.log(response.data); 
            setQueryData(response.data)
            navigate("/searchData", { state: { queryData: response.data } });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const bgPhoto = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '700px'
    };

    const bgGradient = {
        background: 'linear-gradient(to right, rgba(82,162,159,0.6), rgba(127,160,153,0.6), rgba(175,165,146,0.6), rgba(203,134,110,0.6))'
    };

    return (
        <Container>
            <div className='w-full h-[700px] ' style={bgPhoto}>
                <div className='w-full h-full flex justify-center flex-col items-center gap-10 ' style={bgGradient}>
                    <div className='brightness-80 text-center space-y-4 bannerText  '>
                        <div className='inline-flex items-center  '><hr className='h-[2px] w-16 m-auto border-none bg-[#9e2cbf]' /><span className='uppercase px-6 font-bold'>Enjoy the ultimate</span> <hr className='h-[2px] w-16 m-auto bg-[#9e2cbf] border-none' /></div>
                        <h1 className='uppercase text-5xl  text-bold'>Expperience of Compititon</h1>
                    </div>

                    <div className="w-1/3 inline-flex items-center relative">
                        <input onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} type="text" name="contest" id="" placeholder="type contest name" className='w-full h-12 px-6 focus:outline-none rounded-full overflow-x-hidden' />
                        <div className={`absolute right-4 ${searchQuery.length<=0 ? 'pointer-events-none opacity-10':'cursor-pointer opacity-65'}`} onClick={handleSearchQuery}>
                            <Link to={"/searchData"} ><FaSearch size={20} /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Banner;
