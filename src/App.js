import { useState } from "react";
import "./App.css";
import { fetchImage } from "./fetch.js";

function App() {
  const [image, setImage] = useState("");

  const getImage = () => {
    fetchImage().then((json) => setImage(json.message));
  };

  return (
    <main>
      <h1 className="tittle">Generador de Perritos de Ivan</h1>
      <button onClick={getImage} className="button">
        Imagen nueva
      </button>
      <figure>
        <img src={image} alt=""></img>
      </figure>
    </main>
  );
}

export default App;
