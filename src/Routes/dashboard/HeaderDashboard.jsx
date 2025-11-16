import { useContext } from "react";
import useAuthStore from "../../store/authContext"
import { BiWalletAlt } from "react-icons/bi";
import TogggleContext from "../../store/toggleContext";

function HeaderDashboard({ onClick }) {
    const { handleChangeTogggle } = useContext(TogggleContext)
    const { user } = useAuthStore();
    const userName = user.firstName;

    return (
        <div className="bg-black w-[100%] h-auto p-[1.4em] border-b-1  border-[#FFD93D]/70 flex items-center gap-3">
            <p
                onClick={handleChangeTogggle}
                className="cursor-pointer hover:text-[#FFD93D] text-[1.1em]"><BiWalletAlt /></p>
            <h1 className="text-[1.2em] font-light max-md:text-[.9em]">Welcome, <span className="text-[#FFD93D]">{userName}</span></h1>
        </div>
    )
}

export default HeaderDashboard
