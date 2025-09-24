import { useFetch } from '../../hooks/useFetch'
import { fetchingNewAndPopular } from '../../library/new_popularLib';
import { Skeleton } from '@mui/material';

function TvNewsPopular() {

    const { fetchedData, isLoading } = useFetch(fetchingNewAndPopular, []);
        const fillNum = Array(20).fill()

    return (
        <div className='w-full h-auto flex flex-wrap max-xl:justify-between gap-y-3 gap-x-3 max-xl:gap-x-0 mt-10 '>
            {
                isLoading ?
                    fillNum.map((__, index) => {
                        return (
                            <div key={index} className="rounded w-[198px] h-[250px]  max-[952px]:w-[180px  max-[877px]:w-[155px] max-[372px]:w-full max-[372px]:h-[350px]  max-[952px]:h-[270px] ">
                                <Skeleton height="170%" style={{ marginTop: -100 }} sx={{ bgcolor: 'grey.900' }} animation="wave" />
                            </div>
                        )
                    })
                    :
                    fetchedData.map((data) => {
                        return (
                            <main key={data.id} className='w-[19%] max-xl:w-[19%] max-md:w-[30%] max-md:w-[25%] max-sm:w-[49%] h-full relative rounded'>
                                <img
                                    className='w-full h-full object-cover w-[200px] h-full rounded'
                                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}.svg`} alt={data.name}
                                />
                                <div className="absolute top-0 left-0 bg-[#000]/15 w-full h-full">
                                </div>
                            </main>
                        )
                    })
            }
        </div>
    )
}

export default TvNewsPopular
