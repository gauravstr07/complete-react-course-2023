import "./App.css";
import Footer from "./components/Footer";

import { Header } from "./components/Header";

function App() {
  let name = "Gaurav";
  return (
    <div className="App">
      <Header />
      <h1>Hello {name}💖</h1>
      <Footer />
    </div>
  );
}

export default App;
