import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [num, setNum] = useState(0);

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    setNum(num - 1);
  }

  return (
    <div className="App">
      <Header />

      <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons"></div>
        <button className="btn" onClick={inc}>
          Increase
        </button>
        <button className="btn" onClick={dec}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
