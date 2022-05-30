import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./css/coverPage.css";
const draw = (canvasRef, managerRef, tsboxRef) => {
  const manager = managerRef.current;

  for (let i = 1; i <= 22; i++) {
    const boxList = document.createElement("div");
    boxList.classList.add(`box${i}`);
    manager.appendChild(boxList);
  }

  const canvas = canvasRef.current;
  canvas.width = 110;
  canvas.height = 90;
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.rotate((Math.PI / 180) * -10);
    ctx.translate(10, 12);
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(70, 10);
    ctx.lineTo(70, 50);
    ctx.lineTo(40, 50);
    ctx.lineTo(35, 70);
    ctx.lineTo(30, 50);
    ctx.lineTo(0, 50);
    ctx.lineTo(0, 8);
    ctx.strokeStyle = "#78e2ec";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#1b72b5";
    ctx.fill();
    ctx.fillStyle = "#78e2ec";
    ctx.font = "20px sans-serif";
    ctx.fillText("Click", 15, 38);
  }
};

const CoverPage = () => {
  let managerRef = useRef(null);
  let tsboxRef = useRef(null);
  let canvasRef = useRef(null);
  useEffect(() => {
    draw(canvasRef, managerRef, tsboxRef);
  }, []);
  return (
    <React.Fragment>
      <div className="coverBody">
        <div ref={managerRef} className="manager">
          <div ref={tsboxRef} className="tsbox">
            <canvas ref={canvasRef} id="canvas"></canvas>

            <div>
              <Link to="/portFolio">Come in here </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoverPage;
