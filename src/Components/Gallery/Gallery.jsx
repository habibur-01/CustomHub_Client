import SectionHeader from "../SharedComponent/Header/SectionHeader";
import photo1 from "../../assets/image/How-to-Motivate-Sales-Team--700x500.jpg"
import photo2 from "../../assets/image/shutterstock_213304609-300x200.jpg"
import photo3 from "../../assets/image/WPP2023Contest_global-jury_judging.jpg"
import photo4 from "../../assets/image/sales-contest-prizes-.jpg"
import Container from "../SharedComponent/Container/Container";

const Gallery = () => {
    return (
        <Container>
            <div>
                <SectionHeader title={'Gallery'} subTitle={'The Latest Amazing Photos'} />
                <div className="grid mx-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="w-[270px] h-[270px]">
                        <img src={photo1} alt="photo" className="w-full h-full overflow-hidden  object-cover" />
                    </div>
                    <div className="w-[270px] h-[270px]">
                        <img src={photo2} alt="photo" className="w-full h-full overflow-hidden  object-center" />
                    </div>
                    <div className="w-[270px] h-[270px]">
                        <img src={photo3} alt="photo" className="w-full h-full overflow-hidden  object-cover" />
                    </div>
                    <div className="w-[270px] h-[270px]">
                        <img src={photo4} alt="photo" className="w-full h-full overflow-hidden  object-cover" />
                    </div>
                </div>



            </div>
        </Container>
    );
};

export default Gallery;