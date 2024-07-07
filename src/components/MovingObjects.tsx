import React, { useEffect } from "react";

function MovingObjects() {
  const moveRight = (outerDiv: HTMLDivElement, container: HTMLDivElement) => {
    if (outerDiv) {
      const width = outerDiv.offsetWidth;
      console.log("Width of the outer container:", width);
      const remainval = 2000 - width;
      const step = remainval / 5; // Calculate the step value
      console.log(step, "step");

      if (container) {
        let currentStep = 0;
        const intervalId = setInterval(() => {
          currentStep += 1;
          container.style.marginLeft = `-${remainval - step * currentStep}px`;

          if (currentStep >= 5) {
            clearInterval(intervalId);
            // container.style.marginLeft = "0px";
          }
        }, 3000); // Adjust interval duration as needed
      }
    }
  };

  const moveLeft = (outerDiv: HTMLDivElement, container: HTMLDivElement) => {
    if (outerDiv) {
      const width = outerDiv.offsetWidth;
      console.log("Width of the outer container:", width);
      const remainval = 2000 - width;
      const step = remainval / 5; // Calculate the step value
      console.log(step, "remain");

      if (container) {
        let currentStep = 0;
        const intervalId = setInterval(() => {
          currentStep += 1;
          container.style.marginLeft = `-${step * currentStep}px`;

          if (currentStep >= 5) {
            clearInterval(intervalId);
          }
        }, 3000); // Adjust interval duration as needed
      }
    }
  };

  const updateDimensions = (
    outerDiv: HTMLDivElement,
    container: HTMLDivElement
  ) => {
    moveLeft(outerDiv, container);
  };

  useEffect(() => {
    const outerDiv = document.querySelector("#outer_div") as HTMLDivElement;
    const container = document.querySelector(
      "#container_movingobjects"
    ) as HTMLDivElement;

    // Initial moveLeft call on component mount
    moveLeft(outerDiv, container);

    // Set up the interval to call moveLeft and moveRight sequentially
    const intervalId = setInterval(() => {
      // moveLeft(outerDiv, container);
      // setTimeout(() => moveRight(outerDiv, container), 1000);
      moveRight(outerDiv, container);
    }, 15000); // Adjust the interval duration as needed

    // Add event listener for window resize
    const handleResize = () => updateDimensions(outerDiv, container);
    window.addEventListener("resize", handleResize);

    // Cleanup interval and event listener on component unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="outer_div" id="outer_div">
        <div className="inner_div">
          <div className="container_movingobjects" id="container_movingobjects">
            <div className="child">1</div>
            <div className="child">2</div>
            <div className="child">3</div>
            <div className="child">4</div>
            <div className="child">5</div>
            <div className="child">6</div>
            <div className="child">7</div>
            <div className="child">8</div>
            <div className="child">9</div>
            <div className="child">10</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovingObjects;
