import "./scss/styles.scss";
import GalleryLogic from "./containers/GalleryLogic";

function App() {
  return (
    <div className="app">
      <header className="header first-color">
        <h1>Infinite Scroll</h1>
      </header>

      <GalleryLogic />

      <footer className="footer first-color">
        <h2>Gallery Footer</h2>
      </footer>
    </div>
  );
}

export default App;
