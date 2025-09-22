import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useFetch } from '../../hooks/useFetch'
import { fetchingNewAndPopularData } from '../../lib'
import { useSlides } from "../../hooks/useSlides"
import { Skeleton } from "@mui/material";

function New_Popular() {
    const { fetchedData, isLoading } = useFetch(fetchingNewAndPopularData, []);
    const sortedData = fetchedData.sort((a, b) => Math.random() - 0.5)
    const { settings } = useSlides()
    return (
        <div className='h-full w-full px-9 pb-15 max-[768px]:pb-8 max-[768px]:px-5'>
            <section>
                {
                    isLoading ?
                        <Skeleton width="70%" height="5vh" style={{ marginTop: "25px" }} sx={{ bgcolor: 'grey.900' }} />
                        :
                        <h2 className='font-medium text-[1.2em] max-[768px]:text-[1em] tracking-wider mb-2'>
                            New and Popular
                        </h2>
                }
                {
                    isLoading ?
                        <div className="flex justify-between gap-5">
                            <Skeleton width="250px" height="60vh" style={{ marginTop: -90, marginBottom: -150 }} animation="wave" sx={{ bgcolor: 'grey.900' }} />
                            <Skeleton width="250px" height="60vh" style={{ marginTop: -90, marginBottom: -150 }} animation="wave" sx={{ bgcolor: 'grey.900' }} />
                            <Skeleton width="250px" height="60vh" style={{ marginTop: -90, marginBottom: -150 }} animation="wave" sx={{ bgcolor: 'grey.900' }} />
                            <Skeleton width="250px" height="60vh" style={{ marginTop: -90, marginBottom: -150 }} animation="wave" sx={{ bgcolor: 'grey.900' }} />
                        </div>
                        :

                        <Slider {...settings}>
                            {
                                sortedData.map((data) => {
                                    return (
                                        <div className="hidden rounded"  key={data.id}>
                                            <main className='w-[96%] h-[250px] max-[630px]:h-[200px] relative rounded'>
                                                <img
                                                    className='w-full h-full object-cover w-[200px] h-full rounded'
                                                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}.svg`} alt='title'
                                                />
                                                <div className="absolute top-0 left-0 bg-[#000]/38 w-full h-full">
                                                    <h1 className="font-medium text-[15px] max-[800px]:text-[13px] text-[#FFF] absolute bottom-[10%] pl-2">{data.name}</h1>
                                                </div>
                                            </main>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                }

            </section>
        </div>
    )
}

export default New_Popular
