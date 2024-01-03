import React, { useState } from 'react';
import data from './data';
import './style.css';


function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    
    function handleSingleClick(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected? null: getCurrentId);
    }

    function handleMultiCLick(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId == -1) copyMultiple.push(getCurrentId);
        else copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className='accordian'>
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item'>
                            <div onClick={enableMultiSelection?
                            () => handleMultiClick(dataItem.id)
                            : () => handleSingleClick(dataItem.id)} className='title'>
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