import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./components/navbar";
import { Container, SectionHeader, InfoProduct } from "./styles/grid";
import { HeaderBG, CheckVerde } from "./styles/images";
import {
  TitleHeader,
  SubTitleHeader,
  InfoProductP,
  InfoProductSpan,
} from "./styles/texts";
import { ButtonGreen, ButtomSaberMais } from "./styles/buttom";

const App = () => {
  return (
    <div className="app">
      <HeaderBG>
        <Container>
          <Navbarcomp />
          <SectionHeader>
            <TitleHeader>
              Gestão Rápida <br /> e Inteligente de <br /> Notas Fiscais
            </TitleHeader>
            <SubTitleHeader>
              Organize e automatize 100% do seu fluxo de recebimento <br /> com
              inteligência artifical em uma solução completa.
            </SubTitleHeader>
            <InfoProduct>
              <CheckVerde />
              <InfoProductP>
                Planos a partir de <InfoProductSpan>R$ 39,90</InfoProductSpan>
              </InfoProductP>
              <CheckVerde />
              <InfoProductP>
                <InfoProductSpan>ROI garantido</InfoProductSpan> em contrato
              </InfoProductP>
            </InfoProduct>
            <InfoProduct>
              <ButtonGreen>Solicitar Demonstração</ButtonGreen>
              <ButtomSaberMais>
                Quero Saber Mais{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </ButtomSaberMais>
            </InfoProduct>
          </SectionHeader>
        </Container>
      </HeaderBG>
    </div>
  );
};

export default App;
