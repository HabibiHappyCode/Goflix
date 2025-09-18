import React from 'react'

function Search({ toggleSearch }) {

    let styles = "w-0"

    if(toggleSearch) {
        styles += " w-full ease-in duration-400 px-3 focus:outline-hidden"
    } 

    return (
        <>
            <input
                className={styles}
                placeholder='Titles'
            />
        </>
    )
}

export default Search
