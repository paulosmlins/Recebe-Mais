import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./components/navbar";
import { Container, SectionHeader } from "./styles/grid";
import { HeaderBG } from "./styles/images";
import { Jumbotron } from "react-bootstrap";

const App = () => {
  return (
    <div className="app">
      <HeaderBG>
        <Container>
          <Navbarcomp />
          <SectionHeader>
            <h1>Gestão Rápida e Inteligente de Notas Fiscais</h1>
            <p>
              Organize e automatize 100% do seu fluxo de recebimento com
              inteligência artifical em uma solução completa.
            </p>
          </SectionHeader>
        </Container>
      </HeaderBG>
    </div>
  );
};

export default App;
