import React, { useEffect, useState } from "react";
import "./WheelSpinner.css";

const WheelSpinner = () => {

    const [businesses, setBusinesses] = useState(['taco', 'breakfast', 'dessert', 'cake', 'boba', 'boba', 'boba', 'boba']);
    // const [radius, setRadius] = useState(75); // PIXELS
    const [rotate, setRotate] = useState(0); // DEGREES
    const [easeOut, setEaseOut] = useState(0); // SECONDS
    const [angle, setAngle] = useState(0); // RADIANS
    const [top, setTop] = useState(null); // INDEX
    const [offset, setOffset] = useState(null); // RADIANS
    const [net, setNet] = useState(null); // RADIANS
    const [result, setResult] = useState(null); // INDEX
    const [spinning, setSpinning] = useState(false);

    const channel = new BroadcastChannel('react_connect');

  useEffect(() => {
    // generate canvas wheel on load
    renderWheel();
  })

  const renderWheel = () => {
    // determine number/size of sectors that need to created
    let numOptions = businesses.length;
    let arcSize = (2 * Math.PI) / numOptions;
    setAngle(arcSize);

    // get index of starting position of selector
    topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = businesses[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  }


  const topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    setTop(topSpot - 1);
    setOffset(degreesOff);
  };

  const renderSector = (index, text, start, arc, color) => {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = 75;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  }

  const getColor = () => {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  }

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    setRotate(randomSpin);
    setEaseOut(2);
    setSpinning(true);

    // calculate result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin);
    }, 2000);
  };

  const getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat subtraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = businesses.length + count;
    }
    channel.postMessage({to: 'spin_wheel', msg: businesses[result]});
    // set state variable to display result
    setNet(netRotation);
    setResult(result);
  };

  const reset = () => {
    // reset wheel and result
    setRotate(0);
    setEaseOut(0);
    setResult(null);
    setSpinning(false);
  };

    return (
      <div className="App">
        <h1>Spinning Food Wheel</h1>
        <span id="selector">&#9660;</span>
        <canvas
          id="wheel"
          width="500"
          height="500"
          style={{
            WebkitTransform: `rotate(${rotate}deg)`,
            WebkitTransition: `-webkit-transform ${
              easeOut
            }s ease-out`
          }}
        />

        {spinning ? (
          <button type="button" id="reset" onClick={reset}>
            reset
          </button>
        ) : (
          <button type="button" id="spin" onClick={spin}>
            spin
          </button>
        )}
        {/* <div className="display">
          <span id="readout">
            YOU WON:{"  "}
            <span id="result">{businesses[result]}</span>
          </span>
        </div> */}
         
      </div>
    );
  }


export default WheelSpinner;