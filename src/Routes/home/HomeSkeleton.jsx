import Skeleton from '@mui/material/Skeleton';


function HomeSkeleton() {
    return (
        <div className='w-full h-full  flex justify-center'>
            <Skeleton className='w-full' width="95%" height="" animation="wave" />
        </div>
    )
}

export default HomeSkeleton
