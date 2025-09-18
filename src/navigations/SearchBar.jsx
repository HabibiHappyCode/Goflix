import { BsSearch } from "react-icons/bs";
import Search from './Search'
import { useState } from "react";

function SearchBar() {

    const [toggleSearch, setToggleSearch] = useState(false);

    const handleClickedSearch = () => {
        setToggleSearch(prevState => !prevState);
    }

    let styles = "flex justify-end items-center w-1/4  py-1 pr-5 rounded max-[768px]:w-full '"
    if (toggleSearch) {
        styles += ' w-1/4 bg-[#141414]/80 py-1 pr-5'
    }
    return (
        <div className={styles}>
            <Search toggleSearch={toggleSearch} />

            <button onClick={handleClickedSearch}>
                <BsSearch />
            </button>

        </div>
    )
}

export default SearchBar