import React from 'react'
import { useState } from 'react'
import data from './data'
import './Accordion.css';


function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(dataId) {
        console.log(dataId);
        setSelected(dataId == selected ? null : dataId)
    };


    function handleMultipleSingleSelection(dataId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(dataId);
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId == -1) {
            cpyMultiple.push(dataId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(cpyMultiple);
    }


    console.log(selected, multiple)

    return (
        <div className='wrapper'>
            <div className="accordion">
                <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)} >Enable Multiple Selection</button>

                {
                    data && data.length > 0 ? <div>
                        {data.map((dataItem) =>
                        (<div className='item' >
                            <div className="title" onClick={enableMultipleSelection ?
                                () => handleMultipleSingleSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>

                            {
                                enableMultipleSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div>
                                    : selected === dataItem.id && <div>{dataItem.answer}</div>
                            }




                            {
                                // selected === dataItem.id ?
                                //     <div>{dataItem.answer}</div>
                                //     : null
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
