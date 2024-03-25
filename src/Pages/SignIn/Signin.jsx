import { MdOutlineMail } from "react-icons/md";
import { CiLock, CiUnlock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import './Signin.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";


const Signin = () => {
    const [isPassView, setIsPassView] = useState(false)
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast("Successfull log in")
                navigate(location?.state ? location.state : "/")
            }).catch(error => {
                console.error(error)
                toast(error.message)
            })


    }

    const handleSigninWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="w-full min-h-[100vh] flex justify-center items-center">
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-2/5 min-h-[700px] bg-white shadow-md rounded-md sm:border-2">
                <div>
                    <Link to={"/"}><button className="text-black border-[1px] bg-[white] inline-flex items-center gap-2 hover:border-none"><FaArrowLeft />Back</button></Link>
                </div>
                <div className="md:px-12 md:py-14 p-2">
                    <h1 className="text-center font-bold">Sign In</h1>
                    <p className="text-center mt-4 mb-6 font-thin">Please sign in for access your account</p>
                    <form onSubmit={handleSignIn} action="" className="m-2 space-y-4">
                        <div className="flex flex-col space-y-4">
                            <label htmlFor="email">Email address</label>
                            <div className="inputField inline-flex items-center relative">
                                <input type="email" name="email" id="email" placeholder="type your email" />
                                <div className="absolute right-2">
                                    <MdOutlineMail size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="inputField flex flex-col space-y-4">
                            <label htmlFor="email">Password</label>
                            <div className="inline-flex items-center relative">
                                <input type={isPassView ? "text" : "password"} name="password" id="password" autoComplete="off" placeholder="type password" />
                                <div onClick={() => setIsPassView(!isPassView)} className="absolute right-2">
                                    {isPassView ? <CiUnlock size={20} /> : <CiLock size={20} />}
                                </div>
                            </div>
                        </div>
                        <div className="w-full btn1">
                            <button type="submit">Continue</button>
                        </div>
                    </form>
                    <div className="btn1 m-2">
                        <h1 className="text-sm text-center my-4">---Sign in with another way---</h1>
                        <button onClick={handleSigninWithGoogle} className="inline-flex items-center justify-center space-x-4 bg-white googleBtn"><FcGoogle size={25} /> <span className="text-base hover:bold">Sign in with google</span></button>
                        <p className="text-xs md:text-sm mt-1">{`Don't have an account?`}<Link to={"/signup"}> <span className="text-[#646cff] font-bold">Sign up</span></Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signin;