import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authContext';


function SignUp() {

    const { signUp } = useAuthStore()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const userData = Object.fromEntries(fd.entries());

        signUp(userData, navigate)
    }

    const handleNavigate = () => {
        navigate('/signIn')
    }

    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div className=' w-full h-auto relative'>
            <div className="w-full h-[100vh] ">
                <img
                    className="w-full h-[100%] object-cover brightness-40"
                    src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1762863097/netflix_j4wjuu.webp" alt="goflix"
                />
            </div>

            <section className='absolute w-full h-[95%] px-[10em] max-xl:px-[5em] max-lg:px-[2em] max-md:px-[.8em] py-[1em] top-0 left-0 '>
                <div className="flex justify-between items-center">
                    <h1 onClick={handleGoHome} className='uppercase text-[2em] font-medium-bold  text-[#FFD93D] max-md:text-[1.3em] cursor-pointer '>goflix</h1>

                </div>

                <div className="flex flex-col  max-xl:gap-3 h-[100%] w-[50%] max-[951px]:w-[100%] m-auto justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className='bg-black/60 p-[2em]'>
                        <h1 className='text-3xl font-medium mb-3'>Sign Up</h1>
                        <p>
                            <input
                                className="bg-white/30 rounded p-4 mb-2 w-[100%] outline-none max-sm:w-[100%] max-sm:py-[15px]"
                                type="text" name='firstName' required placeholder='Firstname' />
                        </p>
                        <p>
                            <input
                                className="bg-white/30 rounded p-4 mb-2 w-[100%] outline-none max-sm:w-[100%] max-sm:py-[15px]"
                                type="text" name='Surname' placeholder='Surname' required />
                        </p>
                        <p>
                            <input
                                className="bg-white/30 rounded p-4 mb-2 w-[100%] outline-none max-sm:w-[100%] max-sm:py-[15px]"
                                type="email" name='email' placeholder='Email' required />
                        </p>

                        <p>
                            <input
                                className="bg-white/30 rounded p-4 mb-2 w-[100%] outline-none max-sm:w-[100%] max-sm:py-[15px]"
                                type="password" name='password' placeholder='Password' required />
                        </p>
                        <button className='bg-[#FFD93D] py-2 rounded w-full cursor-pointer'>Sign Up</button>

                        <p
                        onClick={handleNavigate}
                        className='my-5 cursor-pointer hover:underline'>Already have an account? <span className=' text-[#FFD93D]'> Sign In</span></p>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default SignUp
