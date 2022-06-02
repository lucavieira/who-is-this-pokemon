import React from "react"
import Api from "./assets/components/Api";
import Container from "./assets/styles/js/Container";

function App() {
  return (
    <>
      <Container>
        <h1>Quem é esse pokémon?</h1>
        <Api />
      </Container>
    </>
  );
}

export default App;
