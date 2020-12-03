import { useEffect, useState, useRef } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
}

export default App;
