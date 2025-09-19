import LandPage from './LandPage';
import TopTen from './TopTen';

function Home() {
    return (
        <div className='absolute top-0 left-0 w-full h-[82vh] max-[768px]:h-[6vh]'>
          
          <LandPage />
            <div>
                <TopTen />
            </div>
        </div>
    )
}

export default Home
