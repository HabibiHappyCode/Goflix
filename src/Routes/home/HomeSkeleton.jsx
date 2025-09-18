import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HomeSkeleton() {
    return (
        <div className='w-full h-full relative'>
            <main className='flex flex-col justify-center gap-4 absolute top-0 left-0 bg-[radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0.33)_0%,rgba(0,0,0,0.68)_100%)] w-full h-full py-4 px-15 max-[768px]:px-5'>
                <Skeleton style={{width: '9%', height:'25px'}} />
                <Skeleton style={{width: '40%', height:'25px'}} />
                <Skeleton style={{width: '40%', height: '10px'}} count={3} />

                <div className='flex gap-2 items-center'>
                    <Skeleton width={100} height={40} />
                    <Skeleton width={100} height={40} />
                </div>
            </main>
        </div>
    )
}

export default HomeSkeleton
