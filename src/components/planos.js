import React from "react";
import IcPlano1 from "../assets/images/icone-plano1.svg";
import IcPlano2 from "../assets/images/icone-plano2.svg";
import IcPlano3 from "../assets/images/icone-plano3.svg";
import CheckValues from "../assets/images/icone-check-planos.svg";
import { ButtonGreen, ButtonBlue } from "../styles/buttom";
import { PlanosCont } from "../styles/grid";

const Planos = () => {
  return (
    <div className="planos">
      <PlanosCont>
        <h3 className="PlanoTitle">
          Planos que crescem junto com a sua empresa
        </h3>
        <div className="PlanoCards">
          <div className="PlanoCard">
            <div className="CardTop">
              <div>
                <h3>Plano 1</h3>
                <p>Descrição do plano 1</p>
              </div>
              <img src={IcPlano1} alt="plano1" />
            </div>
            <hr />
            <div className="CardHeader">
              <div className="CardPagamento">
                <div className="CardValue">
                  <h3 className="CardValue1">R$</h3>
                  <h3 className="CardValue2">39</h3>
                  <div className="CardValue3">
                    <h3 className="CardValue4">,90</h3>
                    <h3 className="CardValue5">mês</h3>
                  </div>
                </div>
                <p className="CardValueDesc">
                  Descrição da forma de pagamento.
                </p>
                <ButtonGreen>Assinar Agora</ButtonGreen>
              </div>
              <div className="VantsValue">
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
              </div>
            </div>
          </div>
          <div className="PlanoCard teste">
            <div className="BestValue">Melhor custo benefício</div>
            <div className="CardTop CardTopDet">
              <div>
                <h3>Plano 2</h3>
                <p>Descrição do plano 2</p>
              </div>
              <img src={IcPlano2} alt="plano2" />
            </div>
            <hr />
            <div className="CardHeader">
              <div className="CardPagamento">
                <div className="CardValue">
                  <h3 className="CardValue1">R$</h3>
                  <h3 className="CardValue2">99</h3>
                  <div className="CardValue3">
                    <h3 className="CardValue4">,90</h3>
                    <h3 className="CardValue5">mês</h3>
                  </div>
                </div>
                <p className="CardValueDesc">
                  Descrição da forma de pagamento.
                </p>
                <ButtonGreen>Assinar Agora</ButtonGreen>
              </div>
              <div className="VantsValue VantsValueDet">
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
              </div>
            </div>
          </div>
          <div className="PlanoCard">
            <div className="CardTop">
              <div>
                <h3>Plano 3</h3>
                <p>Descrição do plano 3</p>
              </div>
              <img src={IcPlano3} alt="plano3" />
            </div>
            <hr />
            <div className="CardHeader">
              <div className="CardPagamento">
                <div className="CardValue">
                  <h3 className="CardValue1">R$</h3>
                  <h3 className="CardValue2">149</h3>
                  <div className="CardValue3">
                    <h3 className="CardValue4">,90</h3>
                    <h3 className="CardValue5">mês</h3>
                  </div>
                </div>
                <p className="CardValueDesc">
                  Descrição da forma de pagamento.
                </p>
                <ButtonGreen>Assinar Agora</ButtonGreen>
              </div>
              <div className="VantsValue">
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
                <p>
                  <img src={CheckValues} /> Item incluso no plano
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="PlanoSubTitle">
          Precisa de uma solução mais robusta e personalizada? Entre em contato
          com nossos consultores.
        </h3>
        <ButtonBlue>Falar com consultor</ButtonBlue>
      </PlanosCont>
    </div>
  );
};

export default Planos;
