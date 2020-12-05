import { useEffect, useState, useRef, useCallback } from "react";

const useFullScreen = (callback) => {
  const element = useRef();

  const runCallback = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCallback(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull);
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2FBoiledMovie%2Ff5bf6f8afe9a440bab072c4cb96d5850.jpg"
          alt="full screen"
        />
        <button onClick={exitFull}>exitFull</button>
      </div>

      <button onClick={triggerFull}>Make fillscreen</button>
    </div>
  );
}

export default App;
