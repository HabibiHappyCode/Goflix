import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import useAuthStore from "../../store/authContext";
import { useContext } from "react";
import TogggleContext from "../../store/toggleContext";

function SideBar() {
    const { logOut } = useAuthStore();
    const { toggle } = useContext(TogggleContext)

    const navigate = useNavigate()


    const handleLogOut = () => {
        logOut(navigate)
    }

    return (
        <div className={`transition-all duration-500 ease-in-out  ${toggle ? 'w-15' : 'w-55'} bg-black h-[100vh] pt-[2em] px-[.8em] relative border-r-1 border-[#FFD93D]/70`}>
            <h1 className='uppercase text-[1.7em] font-light text-[#FFD93D] text-center max-md:text-[1.3em]'>{toggle ? 'g' : 'goflix'}</h1>

            <section className="mt-5 flex flex-col gap-1">
                <NavLink
                    to='/dashboard/profile'
                    className={`font-light text-[15px] ${toggle ? 'text-[20px]' : 'text-[15px]'}  p-1 mb-2 flex gap-2 items-center cursor-pointer transition-background ease-in-out duration-50 hover:bg-white/9`} >
                    <span className='text-[#FFD93D]'><IoPerson /></span>
                    {!toggle && <span> Profile </span>}
                </NavLink>

                <NavLink
                    to='/dashboard/settings'
                    className={`font-light text-[15px] ${toggle ? 'text-[20px]' : 'text-[15px]'}  p-1 mb-2 flex gap-2 items-center cursor-pointer transition-background ease-in-out duration-50 hover:bg-white/9`} >
                    <span className='text-[#FFD93D]'><IoMdSettings /></span>
                    {!toggle && <span> Settings</span>}
                </NavLink>

                <NavLink
                    to='/dashboard/notification'
                    className={`font-light text-[15px] ${toggle ? 'text-[20px]' : 'text-[15px]'}  p-1 mb-2 flex gap-2 items-center cursor-pointer transition-background ease-in-out duration-50 hover:bg-white/9`} >
                    <span className='text-[#FFD93D]'><IoMdNotifications /></span>
                    {!toggle && <span> Notification</span>}
                </NavLink>
            </section>

            <button
                onClick={handleLogOut}
                className={`bg-[#FFD93D] w-[90%] p-1 rounded cursor-pointer text-[17px]  ${toggle ? 'text-[25px]' : 'text-[15px]'} flex gap-2 items-center justify-center absolute left-[5%] bottom-5`}>
                <span><HiOutlineLogout /></span>
                {!toggle && <span> Log Out</span>}
            </button>
        </div>
    )
}

export default SideBar
