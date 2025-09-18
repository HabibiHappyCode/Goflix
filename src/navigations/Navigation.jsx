import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { AiFillCaretDown } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function Navigation() {

    const [toggleClick, setToggleClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handlePageScroll = () => {
        setIsScrolled(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', handlePageScroll);
    }, [])

    const handleClickedCaret = () => {
        setToggleClick(prevState => !prevState)
    }

    let styles = "flex items-center justify-center gap-8 font-semibold text-[14px] capitalize max-[768px]:absolute max-[768px]:flex-col max-[768px]:left-[-50%] max-[768px]:top-[200%] max-[768px]:bg-black/88 max-[768px]:w-1/1 max-[768px]:h-0 max-[768px]:overflow-hidden"
    if (toggleClick) {
        styles += " max-[768px]:h-100 max-[768px]:w-50"
    };

    let scrollStyle

    if (isScrolled >= 100) {
        scrollStyle = 'bg-[#000] transition ease-in-out duration-300'
    }


    return (
        <header className={`py-4 px-15 w-full flex justify-between items-center max-[768px]:px-5 sticky top-0 ${scrollStyle}`}>
            <h1 className='uppercase text-[1.7em] font-light  text-[#FFD93D] max-md:text-[1.3em]'>goflix</h1>

            <nav className=' w-1/2 relative flex justify-center max-[768px]:justify-start'>

                <p
                    className='flex items-center gap-1 font cursor-pointer hidden max-[768px]:block max-[768px]:ml-5'
                    onClick={handleClickedCaret}
                >
                    <span>
                        {toggleClick ? <RxCross2 /> : <AiFillCaretDown />}
                    </span>
                </p>

                <ul className={styles}>
                    <li className='hover:text-[#FFD93D]  transition ease-in duration-100  max-[768px]:py-5'><Link to='/'>home</Link></li>
                    <li className='hover:text-[#FFD93D]  transition ease-in duration-100 max-[768px]:py-5'><Link to='/shows'>shows</Link></li>
                    <li className='hover:text-[#FFD93D]  transition ease-in duration-100 max-[768px]:py-5'><Link to='/movies'>movies</Link></li>
                    <li className='hover:text-[#FFD93D]  transition ease-in duration-100 max-[768px]:py-5'><Link to='/news_popular'>news & popular</Link></li>
                </ul>
            </nav>

            <SearchBar />

        </header>
    )
}

export default Navigation
