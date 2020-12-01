import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  const titleUpdater = useTitle("Loading....");
  setTimeout(() => {
    titleUpdater("Dobby");
  }, 5000);
  // useEffect(() => {

  // }, []);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
}

export default App;
