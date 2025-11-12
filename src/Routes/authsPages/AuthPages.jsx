import AuthLandingPages from './AuthLandingPages'
import TopRatedMovies from '../home/TopRatedMovies'
import Reasons from './Reasons'
import Faqs from './Faqs'
import Ready from './Ready'

function AuthPages() {
    return (
        <>
            <AuthLandingPages />
            <div className='px-[10em] max-xl:px-[5em] max-lg:px-[2em] max-md:px-[.8em] my-[3em] max-xl:my-[1.5em] max-md:my-[.9em] '>
                <TopRatedMovies />
            </div>
            <Reasons />
            <Faqs />
            <Ready />

        
        </>
    )
}

export default AuthPages
