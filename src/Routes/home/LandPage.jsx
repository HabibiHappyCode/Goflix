import React from 'react'
import { fetchingLandPageData } from '../../lib';
import { useFetch } from '../../hooks/useFetch';
import { FaPlay } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import HomeSkeleton from './HomeSkeleton';

function LandPage() {

    const { fetchedData, isLoading } = useFetch(fetchingLandPageData);

    const randomData = Math.floor(Math.random() * fetchedData.length)

    return (
        <>
            {
                isLoading ?
                    <HomeSkeleton />
                    :
                    <div className='w-full h-full relative'>
                        {
                            <img
                                className='w-full h-full object-cover'
                                src={`https://image.tmdb.org/t/p/original/${fetchedData[randomData].backdrop_path}.svg`} alt={fetchedData.name}
                            />
                        }

                        <main className='flex flex-col justify-center gap-4 absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.44)_41%,rgba(0,0,0,0.84)_87%,rgba(20,20,20,1)_100%)] w-full h-full py-4 px-15 max-[768px]:px-5'>
                            <h3 className='flex items-center gap-1'>
                                <span className='font-medium text-4xl max-[550px]:text-2xl text-[#FFD93D] '>G</span>
                                <span className='uppercase font-medium max-[550px]:font-light max-[550px]:text-[11px] tracking-widest'>series</span>
                            </h3>

                            <h1 className='text-5xl text-[#FFD93D] max-[550px]:text-3xl'>{fetchedData[randomData].name}</h1>

                            <p className='w-1/2 h-auto max-[768px]:w-1/1 max-[550px]:text-[13px]'>
                                {fetchedData[randomData].overview}
                            </p>

                            <div className='flex gap-2 items-center'>
                                <button className='flex items-center gap-2 cursor-pointer bg-white transition ease-in duration-100 hover:bg-[rgba(109,109,110,0.9)] text-black rounded px-5 py-2 max-[768px]:px-3 max-[768px]:py-1'>
                                    <span><FaPlay /></span>
                                    <span className='font-medium'>Play</span>
                                </button>
                                <button className='flex items-center gap-2 cursor-pointer bg-[rgba(109,109,110,0.7)] transition ease-in duration-100 hover:bg-[rgba(109,109,110,0.5)] rounded px-5 py-2 max-[768px]:px-3 max-[768px]:py-1'>
                                    <span><RiInformationLine /></span>
                                    <span>More Info</span>
                                </button>
                            </div>
                        </main>

                    </div>
            }
        </>
    )
}

export default LandPage
