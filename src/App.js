import { useEffect, useState, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

function App() {
  const deleteWorld = () => console.log("deleting the world");
  const abort = () => console.log("abort");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={confirmDelete}>Delete world</button>
    </div>
  );
}

export default App;
