import { useEffect, useState, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref: element, style: { opacity: 0 } };
};

function App() {
  const fadeInH1 = useFadeIn(2);
  const fadeInP = useFadeIn(5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hi</h1>
      <p {...fadeInP}>insum lalalalalalal</p>
    </div>
  );
}

export default App;
