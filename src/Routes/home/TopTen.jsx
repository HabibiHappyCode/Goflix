import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useFetch } from '../../hooks/useFetch'
import { fetchingTopTenData } from '../../lib'

function TopTen() {

    const { fetchedData, isLoading } = useFetch(fetchingTopTenData)
    const slicedData = fetchedData.slice(0, 10)

    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 800,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 800,
                }
            },
        ]

    };

    return (
        <div className='h-full w-full px-9 pb-15 max-[768px]:px-5'>
            <section>
                <h2 className='font-medium text-[1.2em] max-[768px]:text-[1em] tracking-wider mb-2'>
                    Top 10 TV Shows in Nigeria Today
                </h2>

                <Slider {...settings}>
                    {
                        slicedData.map((data) => {
                            return (
                                <div className="hidden rounded">
                                    <main key={data.id} className='w-[96%] h-[250px] max-[630px]:h-[200px] relative rounded'>
                                        <img
                                            className='w-full h-full object-cover w-[200px] h-full rounded'
                                            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}.svg`} alt={fetchedData.name}
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

            </section>
        </div>
    )
}

export default TopTen
