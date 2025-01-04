import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Slider from "./Components/Slider";
import Sidebaritem from "./Components/sidebaritem";

const DefaultOptions = [
  {
    name: "brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "hue-rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DefaultOptions);
  const selectedOption = options[selectedOptionIndex];

  const handleSliderChange = ({ target }) => {
    setOptions((prev) =>
      prev.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      })
    );
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}${option.value}${option.unit}`;
    });

    return { filter: filters.join(" ") };
  };

  const handleRestet = () => {
    return setOptions(DefaultOptions);
  };

  return (
    <>
      <div className="bg-gray-200 w-full grid grid-cols-[80%,20%] gap-2 p-5">
        <div className="h-[90vh] flex items-center justify-center">
          <div className="h-[90vh] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1580738917057-7d8ec2d8377a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sample"
              className="w-[900px] object-cover"
              style={{
                filter: `
        brightness(${options[0].value}${options[0].unit}) 
        contrast(${options[1].value}${options[1].unit}) 
        saturate(${options[2].value}${options[2].unit}) 
        grayscale(${options[3].value}${options[3].unit}) 
        sepia(${options[4].value}${options[4].unit}) 
        hue-rotate(${options[5].value}${options[5].unit}) 
        blur(${options[6].value}${options[6].unit})`,
              }}
            />
          </div>
        </div>
        <div className="bg-blue-400 flex flex-col items-center justify-center gap-10">
          {options.map((option, index) => {
            return (
              <Sidebaritem
                key={index}
                name={option.name}
                active={index == selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
            );
          })}
          {/* <button className='bg-green-300 h-10 p-2 rounded-sm'>sidebar</button> */}
        </div>
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleOnchange={handleSliderChange}
        />
        <button className="bg-green-500 " onClick={() => handleRestet()}>
          Reset{" "}
        </button>
      </div>
    </>
  );
}

export default App;
