import Container from "../SharedComponent/Container/Container";
import pic from '../../assets/image/pexels-josh-sorenson-1714208.jpg'

const WelcomeUser = () => {
    return (
        <Container>
            <div className="flex justify-center items-center mx-20 my-10">
                <div className="w-[700px] h-[500px]">
                    <img src={pic} alt="picture" className="w-full h-full object-cover overflow-hidden"/>
                </div>
                <div className="bg-[#152229] w-[600px] h-[450px] flex items-center text-white text-center -ml-14">
                    <div className="w-3/4 mx-auto">
                        <h1 className="text-5xl font-bold">Welcome </h1>
                        <h1 className="text-sm uppercase mt-2 text-[#9e2cbf]">to our Contest Hunter</h1>
                        <p className="mt-6 w-">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem nemo perferendis atque error voluptatum doloribus tenetur asperiores, veniam ipsam?</p>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default WelcomeUser;