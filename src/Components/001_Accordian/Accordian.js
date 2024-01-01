import React, { useState } from 'react';
import data from './data';

function Accordion() {
    const [selected, setSelected] = useState(null);

    
    function handleSingleClick(getCurrentId) {
        setSelected(getCurrentId);
    }

    return (
        <div className='Wrapper'>
        <div className='accordian'>
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item'>
                            <div onClick={handleSingleClick} className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            </div>
                        </div>
                    )
                )): <div>No Data is found</div>
            }
        </div>
        </div>
    );
}

export default Accordion;


// 1. Single Selection
// 2. Multiple Selection