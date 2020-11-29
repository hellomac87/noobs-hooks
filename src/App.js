import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { value } = event.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

function App() {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Mr. D", maxLength);

  return (
    <div className="App">
      <h1>hello </h1>
      <input
        placeholder="name"
        type="text"
        {...name}
        // value={name.value}
        // onChange={name.onChange}
      />
    </div>
  );
}

export default App;
