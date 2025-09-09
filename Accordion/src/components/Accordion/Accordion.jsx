// import React from 'react'
// import { useState } from 'react'
// import data from './data'

// function Accordion() {

//     const [clicks, setClicks] = useState(null)
//     const [multiple, setMultiple] = useState([]);
//     const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);



//     function singleClickHandle(itemId) {
//         // console.log(itemId);
//         setClicks(itemId == clicks ? null : itemId);
//     }

//     function multipleClickHandle(itemId) {
//         let copyClicks = [...multiple];
//         const findIndexOfCurrentId = copyClicks.indexOf(itemId);
//         console.log("index", copyClicks);
//         if (findIndexOfCurrentId == -1) {
//             copyClicks.push(itemId);
//         } else {
//             copyClicks.splice(findIndexOfCurrentId, 1);
//         }

//         setMultiple(copyClicks); //we have to render all clicks after above code
//     }
  


//     return (
//         <div>
//             <div className='wrapper'>
//                 <div className='accordion'>
//                     <button className='btn' onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}> enableMultipleSelection</button>
//                     {
//                         data && data.length > 0 ? <div>
//                             <ol>

//                                 {data.map(e => <li key={e.id}>
//                                     <div key={e.id} onClick={() => enableMultipleSelection ? multipleClickHandle(e.id) : singleClickHandle(e.id)} >
//                                         <h1>{e.question}</h1>
//                                         <span>+</span>

//                                         <div>{ enableMultipleSelection ?
//                                     multiple.indexOf(e.id) !== -1 && <div>{e.answer}</div>
//                                     : clicks === e.id && <div>{e.answer}</div> }</div>
//                                         {/* <div>{clicks == e.id ? <h4>{e.answer}</h4> : null}</div> */}
//                                     </div></li>)
//                                 }

//                             </ol>
//                         </div>
//                             : <div> <h1> no data</h1> </div>
//                     }

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Accordion;
