import React from 'react'
import { useState } from 'react'
import data from './data'
import './Accordion.css';


function Accordion() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(dataId){
        console.log(dataId);
        setSelected(dataId == selected ? null : dataId)
    };
    console.log(selected)

    return (
        <div className='wrapper'>
            <div className="accordion">

                {
                    data && data.length > 0 ? <div>
                        {data.map((dataItem) =>
                        (<div className='item' >
                            <div className="title" onClick={ () => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                            <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ? 
                                <div>{dataItem.answer}</div> 
                                : null
                            }

                        </div>
                        ))}
                    </div> : (<div> "No Data Here.." </div>)
                }

            </div>
        </div>
    )
}

export default Accordion
