import React from 'react';
import './DropDown.css'
function DropDown({ font, handleFontChange }) {

    function callHandleFontChange(selectedFont) {
        handleFontChange(selectedFont);
        showFontList();
    }

    function showFontList() {
        const fontMenu = document.querySelector('.font-menu');
        const arrowDown = document.querySelector('.arrow-down');

        fontMenu.classList.toggle('font-menu-active');
        arrowDown.classList.toggle('arrow-down-active');
    }

    return (
        <div className='container'>
            <div className="font-dropdown">
                <div className="select-font" onClick={showFontList}>
                    <div className='selected-font' value={font}>{font}</div>
                    <div className="arrow-down"> </div>
                </div>
                <ul className='font-menu'>
                    <li style={{ fontFamily: `"Rubik", sans-serif` }}
                        onClick={() => callHandleFontChange("Sans serif")}>Sans Serif</li>
                    <li style={{ fontFamily: `"EB Garamond", serif` }}
                        onClick={() => callHandleFontChange(`Serif`)}>Serif</li>
                    <li style={{ fontFamily: `"Space Mono", monospace` }}
                        onClick={() => callHandleFontChange(`Monospace`)}>Monospace</li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown;