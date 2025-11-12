import { FaGreaterThan } from "react-icons/fa6";

function Ready() {
    return (
        <div className='px-[10em] max-xl:px-[5em] max-lg:px-[2em] max-md:px-[.8em] my-[3em] max-xl:my-[1.5em] max-md:my-[.9em]'>
            <p className="text-center font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex gap-3 justify-center my-5 max-sm:flex-col">
                <input className="bg-[#0f0f0f] rounded px-4 w-[60%] max-sm:w-[100%] max-sm:py-[15px]" type="email" name='email' placeholder="Email" />
                <button className="flex items-center gap-3 max-sm:justify-center text-[1.5em] max-xl:text-[1.2em] max-md:text-[1em] max-xl:gap-1 font-bold max-xl:font-medium bg-[#FFD93D] px-[25px] py-[10px] rounded">Get Started <span><FaGreaterThan /></span></button>
            </form>
        </div>
    )
}

export default Ready
