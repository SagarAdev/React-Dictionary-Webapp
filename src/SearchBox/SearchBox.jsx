import React, { useState } from 'react';
import './SearchBox.css'

function SearchBox({ handleWordChange, font, getFontFamily }) {
    const [searchBoxOutline, setSearchBoxOutline] = useState("none");
    const [errorOpacity, setErrorOpacity] = useState(0);

    function changeOutlineNone() {
        setSearchBoxOutline("none");
    }

    function changeOutlinePurple() {
        setSearchBoxOutline("1.5px solid #a445ed");
    }

    function changeOutlineRed() {
        setSearchBoxOutline("1.5px solid #ff5252");
    }

    function displayError() {
        changeOutlineRed()
        setErrorOpacity(1);

        setTimeout(() => {
            changeOutlinePurple();
            setErrorOpacity(0);
        }, 3000);
    }

    function handleWordSearch(e) {
        e.preventDefault();
        if (e.target.value !== "") {
            const searchWord = e.target.value;
            e.target.value = ""
            e.target.blur();
            handleWordChange(searchWord);
            changeOutlineNone();
            setErrorOpacity(0);

        } else {
            displayError();
        }

    }
    return (
        <form className="search-container" onSubmit={(e) => {
            handleWordSearch(e);
            console.log("word sent")
        }

        }>
            <div className="search-box"
                style={{ outline: searchBoxOutline }}
                onFocus={changeOutlinePurple}
                onBlur={() => {
                    changeOutlineNone();
                    setErrorOpacity(0);
                }}>

                <input className="search-box-input"
                    type="text"
                    placeholder="Search the Word"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleWordSearch(e);
                        }
                    }}
                    style={{ fontFamily: `${getFontFamily(font)}` }} />

                <button type='submit' className="search-btn"> 0 </button>
            </div>
            <p className="error-message" style={{ opacity: errorOpacity }}>Please enter a word</p>
        </form >
    )
}

export default SearchBox;