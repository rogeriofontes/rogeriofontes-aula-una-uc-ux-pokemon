import React from "react";
import PokeApi from "./components/PokeApi";
import PokeApiList from "./components/PokeApiList";
import PokeApiListDash from "./components/PokeApiListDash";

function App() {
  return (
    <div className="App">
      <PokeApi />
      <PokeApiList />
      <PokeApiListDash />
    </div>
  );
}

export default App;
