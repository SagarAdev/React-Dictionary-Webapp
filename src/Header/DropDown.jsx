import React, { useEffect, useRef } from 'react';
import './DropDown.css'
function DropDown({ font, handleFontChange }) {
    const dropdownRef = useRef(null);

    // Function to handle closing the dropdown when clicking outside
    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            const fontMenu = document.querySelector('.font-menu');
            const arrowDown = document.querySelector('.arrow-down');

            // Close the dropdown if clicked outside
            if (fontMenu.classList.contains('font-menu-active')) {
                fontMenu.classList.remove('font-menu-active');
                arrowDown.classList.remove('arrow-down-active');
            }
        }
    }

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function callHandleFontChange(selectedFont) {
        handleFontChange(selectedFont);
        toggleFontList();
    }

    //Function to show/hide dropdown
    function toggleFontList() {
        const fontMenu = document.querySelector('.font-menu');
        const arrowDown = document.querySelector('.arrow-down');

        fontMenu.classList.toggle('font-menu-active');
        arrowDown.classList.toggle('arrow-down-active');
    }

    return (
        <div className='container' ref={dropdownRef}>
            <div className="font-dropdown">
                <div className="select-font" onClick={toggleFontList}>
                    <div className='selected-font' value={font}>{font}</div>
                    <div className="arrow-down"> </div>
                </div>
                <ul className='font-menu'>
                    <li style={{ fontFamily: `"EB Garamond", serif` }}
                        onClick={() => callHandleFontChange(`Serif`)}>Serif</li>
                    <li style={{ fontFamily: `"Rubik", sans-serif` }}
                        onClick={() => callHandleFontChange("Sans serif")}>Sans Serif</li>
                    <li style={{ fontFamily: `"Space Mono", monospace` }}
                        onClick={() => callHandleFontChange(`Monospace`)}>Monospace</li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown;