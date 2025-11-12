
import { useState } from 'react';
import useAuthStore from '../store/authContext';
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";


function User() {
    const [profile, setProfile] = useState(false);

    const { user } = useAuthStore();

    const surnameFirstLetter = user.Surname.charAt();
    const firstnameFirstLetter = user.firstName.charAt();

    const userEmail = user.email;
    const userName = user.firstName

    const handleShowProfile = () => {
        setProfile(prev => !prev)
    }



    return (

        <section className='relative'>
            <h2
                onClick={handleShowProfile}
                className=' bg-[#FFD93D] w-10 h-10  flex items-center justify-center rounded-[50px] cursor-pointer text-[18px]'>
                <span>{surnameFirstLetter}</span>
                <span>{firstnameFirstLetter}</span>
            </h2>

            <article className={`absolute right-0 mt-2 w-65 p-5 top-10 bg-black/80 transition-all ease-in-out duration-200 ${profile ? `translate-x-[0%]` : ` translate-x-[130%]`} `}>
                <p className='font-light text-[15px] mb-2 flex gap-2 items-center'>
                    <span className='text-[#FFD93D]'><IoPerson /></span>
                    <span> {userName}</span>
                </p>

                <p className='font-light text-[15px] mb-2 flex gap-2 items-center'>
                    <span className='text-[#FFD93D]'><MdEmail /></span>
                    <span> {userEmail}</span>
                </p>

                <p className='font-light text-[15px] mb-2 flex gap-2 items-center'>
                    <span className='text-[#FFD93D]'><FaClipboard /></span>
                    <span> Dashboard</span>
                </p>

                <button className='bg-[#FFD93D] w-full p-1 rounded cursor-pointer text-[17px] flex gap-2 items-center justify-center'>
                    <span><HiOutlineLogout /></span>
                    <span>Log Out</span>
                </button>
            </article>

        </section>

    )
}

export default User
