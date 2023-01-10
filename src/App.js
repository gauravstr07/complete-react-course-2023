import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movieList.json";

function App() {
  let login = true;

  return (
    <div className="App">
      {(() => {
        if (!login) {
          return (
            <h1 style={{ color: "red" }}>
              🔒 You don't have access to login this application 🔒
            </h1>
          );
        }
      })()}
      <Header />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
