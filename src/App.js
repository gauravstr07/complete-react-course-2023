import "./App.css";


import { Header } from "./components/Header";

function App() {
  let name = "Gaurav";
  return (
    <div className="App">
      <Header />
      <h1>Hello {name}💖</h1>
     
    </div>
  );
}

export default App;
