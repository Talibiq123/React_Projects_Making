import React, { useState } from 'react';
import data from './001_Accordian/data';

function Accordion() {
    const [selected, setSelected] = useState(null);

    return (
        <div className='Wrapper'>
        <div className='accordian'>
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className='item'>
                            <div className='title'>
                            <h3>{dataItem.question}</h3>
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