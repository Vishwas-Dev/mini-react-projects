import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './RandomColorGenerator.css'

function RandomColorGenerator() {

  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState('#000000');
  // console.log( typeColor );


  function randomColorHexGenerte(length) {
    return Math.floor(Math.random() * length);
  }

  function randomColorOfHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorHexGenerte(hex.length)];
    }

    setColor(hexColor);
  };


  function randomColorOfRgb() {
    console.log("rgb")
    const r = randomColorHexGenerte(256);
    const g = randomColorHexGenerte(256);
    const b = randomColorHexGenerte(256);

    setColor(`rgb(${r},${g},${b})`)
  };


  function randomColorGenerator() {

  }


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
