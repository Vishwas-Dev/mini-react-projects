import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './RandomColorGenerator.css'

function RandomColorGenerator() {

  const [typeColor, setTypeColor] = useState("hex"); // color comparing state
  const [color, setColor] = useState('#000000'); // which color is store and default is black color
  // console.log( typeColor );


  // generating color code or number for colors

  function randomColorGenerting(length) {
    return Math.floor(Math.random() * length);
  }

  // generating random color of hex

  function randomColorOfHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorGenerting(hex.length)];
    }

    setColor(hexColor);
  };

// generating random color of rgb
  function randomColorOfRgb() {
    console.log("rgb")
    const r = randomColorGenerting(256);
    const g = randomColorGenerting(256);
    const b = randomColorGenerting(256);

    setColor(`rgb(${r},${g},${b})`)
  };


  // for reloading when switch btn hex to rgb or rgb t hex rendering
  useEffect(() => {
    if (typeColor == 'hex') {
      return randomColorOfHex();
    } else {
      randomColorOfRgb();
    }
  }, [typeColor]);



  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: color,
    }}>
      <div className="btn-wrapper">
        <button className="one" onClick={() => setTypeColor("rgb")} >RGB</button>
        <button className="two" onClick={() => setTypeColor("hex")}>HEX</button>
        <button className="three" onClick={() => typeColor === "hex" ? randomColorOfHex() : randomColorOfRgb()}>Generate</button>
      </div>


      <div className=''><h1>{typeColor === "hex" ? `HEX-Color : ${color}` : `RBG-Color : ${color}`}</h1></div>


    </div>
  )
}

export default RandomColorGenerator
