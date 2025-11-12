import React from 'react'
import ReasonsItems from './ReasonsItems'

function Reasons() {
    return (
        <div className='px-[10em] max-xl:px-[5em] max-lg:px-[2em] max-md:px-[.8em] mt-[-3em] max-lg:mt-[-1em]'>
            <h1 className='text-2xl max-lg:text-[1.1em] mb-[12px] '>More Reasons to Join</h1>

            <section className='flex gap-4 max-lg:gap-2 max-xl:flex-wrap max-xl:justify-between'>
                <ReasonsItems
                    title='Enjoy on your TV'
                    paragraph='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
                    svg={<svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="goldenGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FFD93D" />
                                <stop offset="100%" stopColor="#FF6B6B" />
                            </linearGradient>
                        </defs>

                        <g fill="url(#goldenGradient)">
                            <path d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z" />
                            <path d="M18.6 60.7388C18.6 60.2306 18.9587 59.796 19.4602 59.711C22.0196 59.2775 29.7585 58.0508 35.4 58.0508C41.0415 58.0508 48.7804 59.2775 51.3398 59.711C51.8412 59.796 52.2 60.2306 52.2 60.7388C52.2 60.902 52.0575 61.0268 51.8967 61.0004C50.1219 60.707 40.9704 59.2409 35.4 59.2409C29.8295 59.2409 20.678 60.707 18.9033 61.0004C18.7425 61.0268 18.6 60.902 18.6 60.7388Z" />
                            <path d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" />
                            <path d="M8.99995 12.6H63C63.663 12.6 64.2 13.1372 64.2 13.8V50.4H7.79995V13.8C7.79995 13.1372 8.33719 12.6 8.99995 12.6Z" />
                            <path d="M35.4 52.8C36.3941 52.8 37.2 52.3971 37.2 51.9C37.2 51.4029 36.3941 51 35.4 51C34.4059 51 33.6 51.4029 33.6 51.9C33.6 52.3971 34.4059 52.8 35.4 52.8Z" />
                        </g>
                    </svg>}
                />

                <ReasonsItems
                    title='Download your shows to watch offline'
                    paragraph='Save your favorites easily and always have something to watch.'
                    svg={<svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFD93D" />
                                <stop offset="50%" stopColor="#FF6B6B" />
                                <stop offset="100%" stopColor="rgba(255,217,61,0.57)" />
                            </linearGradient>
                        </defs>


                        <path
                            id="Vector_4"
                            opacity="0.5"
                            d="M64.7658 36.195C65.5206 51.5916 53.7908 63.5824 38.5668 62.977C23.3428 62.3722 10.3893 49.4 9.63446 34.0034C8.87954 18.6068 20.6091 6.61594 35.8331 7.22116C51.0571 7.82638 64.0104 20.7984 64.7658 36.195Z"
                            fill="url(#customGradient)"
                        />


                        <path
                            d="M36 20V46M36 46L28 38M36 46L44 38"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    }
                />

                <ReasonsItems
                    title='Create profiles for kids'
                    paragraph='Send kids on adventures with their favorite characters in a space made just for them — free with your membership.'
                    svg={<svg
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="goldenGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FFD93D" />
                                <stop offset="100%" stopColor="#FF6B6B" />
                            </linearGradient>
                        </defs>

                        <g fill="url(#goldenGradient)">
                            <path d="M37.2 53.3992C37.2 52.7365 36.6628 52.1992 36 52.1992H34.8C34.1373 52.1992 33.6 52.7365 33.6 53.3992V56.2636C33.6 56.9129 33.0834 57.4433 32.4347 57.4739C30.3013 57.5744 28.1719 57.7834 26.0546 58.1011L19.444 59.0926C18.2692 59.2688 17.4 60.2782 17.4 61.4662V62.0992C17.4 62.4304 17.6686 62.6992 18 62.6992H52.8C53.1314 62.6992 53.4 62.4304 53.4 62.0992V61.4662C53.4 60.2782 52.5309 59.2688 51.3561 59.0926L44.7454 58.1011C42.6282 57.7834 40.4987 57.5744 38.3653 57.4739C37.7167 57.4433 37.2 56.9129 37.2 56.2636V53.3992Z" />
                            <path d="M18.6 60.7388C18.6 60.2306 18.9587 59.796 19.4602 59.711C22.0196 59.2775 29.7585 58.0508 35.4 58.0508C41.0415 58.0508 48.7804 59.2775 51.3398 59.711C51.8412 59.796 52.2 60.2306 52.2 60.7388C52.2 60.902 52.0575 61.0268 51.8967 61.0004C50.1219 60.707 40.9704 59.2409 35.4 59.2409C29.8295 59.2409 20.678 60.707 18.9033 61.0004C18.7425 61.0268 18.6 60.902 18.6 60.7388Z" />
                            <path d="M63 12H8.99995C8.00584 12 7.19995 12.8059 7.19995 13.8V51.6C7.19995 52.5941 8.00584 53.4 8.99995 53.4H63C63.9941 53.4 64.8 52.5941 64.8 51.6V13.8C64.8 12.8059 63.9941 12 63 12Z" />
                            <path d="M8.99995 12.6H63C63.663 12.6 64.2 13.1372 64.2 13.8V50.4H7.79995V13.8C7.79995 13.1372 8.33719 12.6 8.99995 12.6Z" />
                            <path d="M35.4 52.8C36.3941 52.8 37.2 52.3971 37.2 51.9C37.2 51.4029 36.3941 51 35.4 51C34.4059 51 33.6 51.4029 33.6 51.9C33.6 52.3971 34.4059 52.8 35.4 52.8Z" />
                        </g>
                    </svg>}
                />

                <ReasonsItems
                    title='Watch everywhere'
                    paragraph='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
                    svg={<svg
                        width="72"
                        height="72"
                        viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFD93D" />
                                <stop offset="50%" stopColor="#FF6B6B" />
                                <stop offset="100%" stopColor="rgba(255,217,61,0.57)" />
                            </linearGradient>
                        </defs>


                        <path
                            id="Vector_2"
                            d="M9.59998 14.4016C9.59998 11.7506 11.749 9.60162 14.4 9.60156H39.6C42.251 9.60156 44.4 11.7506 44.4 14.4016V39.6015C44.4 42.2525 42.251 44.4015 39.6 44.4015H14.4C11.749 44.4016 9.59998 42.2525 9.59998 39.6015V14.4016Z"
                            fill="url(#customGradient)"
                        />


                        <path
                            d="M27 16V34M27 34L19 26M27 34L35 26"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    }
                />


            </section>
        </div>
    )
}

export default Reasons
