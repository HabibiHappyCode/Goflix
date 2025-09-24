import React from 'react'
import TvMovies from './TvMovies'

function Movies() {
    return (
       <div className='absolute w-[100%] h-auto left-0 top-15 py-4 px-15 max-[768px]:px-5'>
            <div className='w-full h-auto'>
                <h1 className=' text-3xl max-[768px]:text-[19px]'>Movies</h1>
            </div>
            <TvMovies />
        </div>
    )
}

export default Movies
