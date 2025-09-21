import LandPage from './LandPage';
import New_Popular from './New_Popular';
import TopRatedMovies from './TopRatedMovies';
import TopTen from './TopTen';

function Home() {
    return (
        <div className='absolute top-0 left-0 w-full h-[82vh] max-[768px]:h-[60vh]'>

            <LandPage />
            <div>
                <TopTen />
                <TopRatedMovies />
                <New_Popular />
            </div>
        </div>
    )
}

export default Home
