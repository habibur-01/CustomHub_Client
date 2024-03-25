import Container from "../../Components/SharedComponent/Container/Container";
import SectionHeader from "../../Components/SharedComponent/Header/SectionHeader";
import emailBg from "../../assets/image/email.jpg"
import emailjs from '@emailjs/browser';
import "./style.css"
import { useRef } from "react";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_a34hgq9', 'template_442j48o', form.current, {
          publicKey: 'GBo7g0wdk10B6FC70',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div>
            <Container>
                <div className="relative w-full h-[800px]">
                    <img src={emailBg} className="w-full h-full object-center brightness-50" alt="" />
                    <div className="absolute top-0 right-[20%] left-[20%] contact text-white">
                        <SectionHeader title={'Contact us'} subTitle={'Have any question? We would love to hear from you.'}></SectionHeader>
                        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 w-full p-5 border-2 rounded-tr-[50px]">
                            <div className="flex flex-col items-center top-12">
                                <h1 className="font-bold">#Address</h1>
                                
                                <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                                <p>Support: Web@Programming-Hero.Com</p>
                                <p>Helpline: 01322-810882</p>
                               <p> {`(Available: Sat - Thu, 10:00 AM To 7:00 PM)`}</p>

                            </div>
                            <div className="w-[50%]">
                                <form className="space-y-4" ref={form} onSubmit={sendEmail}>

                                    <div className="flex flex-col space-y-4">
                                        <label htmlFor="" className="font-bold">Name</label>
                                        <input type="text" placeholder="type first name" name="user_name" id="" />
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        <label htmlFor="" className="font-bold">Email</label>
                                        <input type="email" placeholder="type your email" name="user_email" id="" />
                                    </div>

                                    <div className="flex flex-col space-y-4" >
                                        <label htmlFor="" className="font-bold ">Message</label>
                                        <textarea className="w-full h-20 rounded-lg p-4 text-black" placeholder="type your message" type="text" name="message" id="" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;