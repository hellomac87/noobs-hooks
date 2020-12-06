import { useEffect, useState, useRef, useCallback } from "react";
import useAxios from "./useAxios";

function App() {
  const { loading, error, data, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });

  console.log(`data : ${JSON.stringify(data)}`);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
