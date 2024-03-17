import Banner from "../../Components/Banner/Banner";
import BestCreator from "../../Components/BestCreator/BestCreator";
import ContestSection from "../../Components/ContestSection/ContestSection";
import Gallery from "../../Components/Gallery/Gallery";
import PopularContest from "../../Components/PopularContest/PopularContest";
import WelcomeUser from "../../Components/WelcomeUser/WelcomeUser";


const Home = () => {
    return (
        <div>
            <Banner />
            <WelcomeUser />
            <PopularContest />
            <ContestSection />
            <Gallery></Gallery>
            <BestCreator />
        </div>
    );
};

export default Home;