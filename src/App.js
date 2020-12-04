import { useEffect, useState, useRef, useCallback } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = useCallback(() => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }, [onChange]);

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [handleChange]);

  return status;
};

function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "we js went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "onLine" : "offLine"}</h1>
    </div>
  );
}

export default App;
