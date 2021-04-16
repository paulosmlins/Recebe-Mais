import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./components/navbar";
import Header from "./components/header";
import MoreInfo from "./components/moreinformation";
import { ContainerHeader, Container } from "./styles/grid";
import { HeaderBG } from "./styles/images";

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
    </div>
  );
};

export default App;
