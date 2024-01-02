import React, { useState } from 'react';
import data from './data';
import './style.css';


function Accordion() {
    const [selected, setSelected] = useState(null);

    
    function handleSingleClick(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected? null: getCurrentId);
    }

    return (
        <div className='wrapper'>
        <div className='accordian'>
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item'>
                            <div onClick={() => handleSingleClick(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span className='mid'>+</span>
                            </div>
                            {
                                selected === dataItem.id ? <div>{dataItem.answer}</div> : <div>{null}</div>
                            }
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