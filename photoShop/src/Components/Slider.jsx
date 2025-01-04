import React, { useState } from "react";

function Slider({min, max,value ,handleOnchange}) {

//   const handleOnchange = (e) => {
//     const newValue = e.target.value;
//     setValue(newValue);
//     console.log(value);
    
//   };

  return (
    <div className=" bg-green-100 flex justify-center">
      {" "}
      
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleOnchange}
        className="w-2/4 p-2"
      />
    </div>
  );
}

export default Slider;
