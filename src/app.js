import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./components/navbar";
import Header from "./components/header";
import Planos from "./components/planos";
import MoreInfo from "./components/moreinformation";
import Doubts from "./components/doubts";
import Footer from "./components/footer";
import { ContainerHeader, Container, PlanosBG, HeaderBG } from "./styles/grid";

const App = () => {
  return (
    <div className="app">
      <HeaderBG>
        <ContainerHeader>
          <Navbarcomp />
          <Header />
        </ContainerHeader>
      </HeaderBG>
      <Container>
        <MoreInfo />
      </Container>
      <PlanosBG>
        <Container>
          <Planos />
          <Doubts />
          <Footer />
        </Container>
      </PlanosBG>
    </div>
  );
};

export default App;
