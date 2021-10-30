import { useState } from "react";
import "./App.css";
import { dogOrCat } from "./fetch.js";

function App() {
  const [image, setImage] = useState("");

  const getImage = () => {
    dogOrCat().then((image) => setImage(image));
  };

  return (
    <main>
      <h1 className="tittle">Generador de Imagenes de Perritos y Gatitos</h1>
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
