import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { fetchingTvShowsData } from '../../library/showsLib'
import { Skeleton } from '@mui/material';

function TvShows() {

    const { fetchedData, isLoading } = useFetch(fetchingTvShowsData, []);
    const sortedData = fetchedData.sort((a, b) => Math.random() - 0.5)
    const fillNum = Array(20).fill()

    return (
        <div className='w-full h-auto flex flex-wrap gap-2 mt-10  max-[952px]:justify-center'>
            {
                isLoading ?
                    fillNum.map((__, index) => {
                        return (
                            <div key={index} className="rounded w-[198px] h-[250px]  max-[952px]:w-[180px  max-[877px]:w-[155px] max-[372px]:w-full max-[372px]:h-[350px]  max-[952px]:h-[270px] ">
                               <Skeleton height="170%" style={{marginTop: -100}}  sx={{ bgcolor: 'grey.900' }} />
                            </div>
                        )
                    })
                    :
                    sortedData.map((data) => {
                        return (
                            <div key={data.id} className="rounded w-[198px]  h-[250px]  max-[952px]:w-[180px]  max-[877px]:w-[155px] max-[535px]:w-[200px] max-[450px]:w-full max-[450px]:h-[350px]  max-[952px]:h-[270px] ">
                                <main className='w-[100%] h-full relative rounded'>
                                    <img
                                        className='w-full h-full object-cover w-[200px] h-full rounded'
                                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}.svg`} alt={data.name}
                                    />
                                    <div className="absolute top-0 left-0 bg-[#000]/15 w-full h-full">
                                    </div>
                                </main>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default TvShows
