export function useSlides() {
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

    return {
        settings
    }
}