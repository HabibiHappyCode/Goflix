import { Link } from "react-router-dom"
import { FaGreaterThan } from "react-icons/fa6";


function AuthLandingPages() {
    return (
        <div className='relative w-full h-auto'>
            <div className="w-full h-[85vh] max-lg:h-[75vh] ">
                <img
                    className="w-full h-[100%] object-cover brightness-40"
                    src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1762863097/netflix_j4wjuu.webp" alt="goflix" />
            </div>

            <header className='absolute w-full h-[95%] px-[10em] max-xl:px-[5em] max-lg:px-[2em] max-md:px-[.8em] py-[1em] top-0 left-0 '>
                <div className="flex justify-between items-center">
                    <h1 className='uppercase text-[2em] font-medium-bold  text-[#FFD93D] max-md:text-[1.3em]'>goflix</h1>
                    <button><Link className='bg-[#FFD93D] text-[14px] rounded px-[12px] py-[8px]'>Sign In</Link></button>
                </div>

                <div className="flex flex-col gap-5 max-xl:gap-3 h-[100%] w-[60%] max-[951px]:w-[100%] items-center m-auto justify-center">
                    <h1 className="text-5xl  max-[951px]:text-3xl max-lg:font-medium font-bold text-center">Unlimited movies, TV shows, and more</h1>
                    <h3 className="text-1xl font-bold  max-lg:font-light">Starts at ₦2,500. Cancel anytime.</h3>
                    <p className="font-light text-center  max-lg:text-[12px]">Ready to watch? Enter your email to create or restart your membership.</p>
                    <button>
                        <Link className="flex items-center gap-3 text-[1.5em] max-xl:text-[1.2em] max-md:text-[1em] max-xl:gap-1 font-bold max-xl:font-medium bg-[#FFD93D] px-[25px] py-[10px] rounded"> Get Started
                            <span><FaGreaterThan /></span></Link>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default AuthLandingPages
