import SectionHeader from "../SharedComponent/Header/SectionHeader";
import photo from "../../assets/image/Max-R_Headshot (1).jpg"
import Container from "../SharedComponent/Container/Container";

const Gallery = () => {
    return (
        <Container>
            <div>
                <SectionHeader title={'Gallery'} subTitle={'The Latest amazing photos'} />
                <div className="grid mx-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="w-[270px] h-[270px]">
                        <img src={photo} alt="photo" className="w-full h-full overflow-hidden object-cover" />
                    </div>
                    <div className="w-[270px] h-[270px]">
                        <img src={photo} alt="photo" className="w-full h-full overflow-hidden object-cover" />
                    </div>
                    <div className="w-[270px] h-[270px]">
                        <img src={photo} alt="photo" className="w-full h-full overflow-hidden object-cover" />
                    </div>
                    <div className="w-[270px] h-[270px]">
                        <img src={photo} alt="photo" className="w-full h-full overflow-hidden object-cover" />
                    </div>
                </div>



            </div>
        </Container>
    );
};

export default Gallery;