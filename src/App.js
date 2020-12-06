import { useEffect, useState, useRef, useCallback } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

function App() {
  const fireNotification = useNotification("Can i steal your heart?", {
    body: "i love you",
  });

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={fireNotification}>button</button>
    </div>
  );
}

export default App;
