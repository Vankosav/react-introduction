import "./styles.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import ButtonBlue from "./components/ButtonBlue";
import ButtonYellow from "./components/ButtonYellow";
import Gallery from "./components/Gallery";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Headline />

      <ButtonBlue />

      <ButtonYellow />

      <Gallery />
    </div>
  );
}

export default App;
