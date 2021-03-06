import React from "react";
import {
  InfoProsT,
  InfoProsM,
  InfoProsB,
  InfoFunc,
  InfoPlus,
} from "../styles/grid";
import Azul from "../assets/images/quadrado-espaco-icones.svg";
import ControleSimpli from "../assets/images/controles-simplificados.svg";
import BaixoCusto from "../assets/images/baixo-custo.svg";
import PageApenas from "../assets/images/pague-apenas.svg";
import TotalAlto from "../assets/images/totalmente-automatizado.svg";
import BaixoValor from "../assets/images/baixo-valor.svg";
import todosdoc from "../assets/images/todos-tipos-docs.svg";
import nivel from "../assets/images/niveis.svg";
import plataformatec from "../assets/images/plataforma-tecnoloiga.svg";
import gestaoFac from "../assets/images/gestao-facilitada.svg";
import iconlupa from "../assets/images/visao-detalhes.svg";
import visueasy from "../assets/images/visualizacao-facil.svg";
import ajustesnotas from "../assets/images/ajustes-notas.svg";
import unificacao from "../assets/images/unificacao.svg";
import conversao from "../assets/images/conversao.svg";
import tomadeci from "../assets/images/tomada-decisao.svg";
import validanotas from "../assets/images/validacoes-notas-fiscais.svg";
import validacruzadas from "../assets/images/validacoes-cruzadas.svg";
import diversosformatos from "../assets/images/diversos-formatos-aceitos.svg";
import { InfoProsTitle, InfoProsP, InfoProsItemP } from "../styles/texts";
import { InfoProsIconsMax } from "../styles/images";
import { ButtonGreen } from "../styles/buttom";

const MoreInfo = () => {
  return (
    <div className="MoreInfo">
      <InfoProsT>
        <div className="InfoProsText">
          <InfoProsTitle>
            Mais facilidade, <br /> menos complexidade
          </InfoProsTitle>
          <InfoProsP>
            Chegamos para simplificar a gestão e <br /> controle de notas
            fiscais, removendo toda <br /> a complexidade.
          </InfoProsP>
        </div>
        <div className="InfoProsItens">
          <div className="InfoProsItem">
            <InfoProsIconsMax Img={ControleSimpli} alt="Quadrado azul" />
            <InfoProsItemP>Controles Simplificados</InfoProsItemP>
          </div>
          <div className="InfoProsItem">
            <InfoProsIconsMax Img={BaixoCusto} alt="Quadrado azul" />
            <InfoProsItemP>Baixo custo de implementação</InfoProsItemP>
          </div>
          <div className="InfoProsItem">
            <InfoProsIconsMax Img={PageApenas} alt="Quadrado azul" />
            <InfoProsItemP>Pague apenas quando usar</InfoProsItemP>
          </div>
          <div className="InfoProsItem">
            <InfoProsIconsMax Img={TotalAlto} alt="Quadrado azul" />
            <InfoProsItemP>Totalmente automatizado</InfoProsItemP>
          </div>
          <div className="InfoProsItem">
            <InfoProsIconsMax Img={BaixoValor} alt="Quadrado azul" />
            <InfoProsItemP>Baixo valor unitário</InfoProsItemP>
          </div>
        </div>
      </InfoProsT>
      <InfoProsM>
        <div className="divProsM">
          <img src={todosdoc} alt="Quadrado azul" />
          <h3>Todos os tipos de documentos</h3>
          <p>Nfe , NFS, CTe , NFC, Conc, Etc</p>
        </div>
        <div className="divProsM">
          <img src={nivel} alt="Quadrado azul" />
          <h3>Nível Federal, Estadual e Municipal</h3>
          <p>Disponível para todas as prefeituras do Brasil</p>
        </div>
        <div className="divProsM">
          <img src={plataformatec} alt="Quadrado azul" />
          <h3>Plataforma com alta tecnologia</h3>
          <p>Rápida e inteligente, do jeito que você procura</p>
        </div>
      </InfoProsM>
      <InfoProsB>
        <div>
          <h3>
            Todos os planos garantem o acompanhamento ativo da plataforma,
            suporte 5x8 e acesso a qualquer evolução da implementada.
          </h3>
          <ButtonGreen>Solicitar Demonstração</ButtonGreen>
        </div>
      </InfoProsB>
      <InfoFunc>
        <div className="InfoFuncItens">
          <h3 className="InfoFuncTitle">
            Conheça nossas principais funcionalidades
          </h3>
          <div className="InfoFuncBox">
            <div className="backAzul"></div>
            <div className="InfoBoxText">
              <img
                className="InfoBoxIcon"
                src={gestaoFac}
                alt="Quadrado azul"
              />
              <h3>Gestão facilitada</h3>
              <p>
                Confira os documentos novos ou pagos, utilizando filtros para
                encontrar com mais agilidade.
              </p>
            </div>
          </div>
          <div className="InfoFuncBox">
            <div className="InfoBoxText">
              <img className="InfoBoxIcon" src={iconlupa} alt="Quadrado azul" />
              <h3>Visão em detalhes</h3>
              <p>
                Acesso simplificado aos detalhes de cada NF nova ou armazenada.
              </p>
            </div>
            <div className="backAzul"></div>
          </div>
          <div className="InfoFuncBox">
            <div className="backAzul"></div>
            <div className="InfoBoxText">
              <img className="InfoBoxIcon" src={visueasy} alt="Quadrado azul" />
              <h3>Visualização fácil</h3>
              <p>
                Acesso em lista simplificado e totalmente customizável por
                usuário.
              </p>
            </div>
          </div>
          <div className="InfoFuncBox">
            <div className="InfoBoxText">
              <img
                className="InfoBoxIcon"
                src={ajustesnotas}
                alt="Quadrado azul"
              />
              <h3>Ajustes de notas</h3>
              <p>Acesse e ajustes a qualquer momento.</p>
            </div>
            <div className="backAzul"></div>
          </div>
          <hr />
          <InfoPlus>
            <h3 className="InfoPlusTitle">
              E muito mais recursos e atualizações
            </h3>
            <div className="InfoPlusItens">
              <div className="InfoPlusItem">
                <img src={unificacao} alt="Quadrado azul" />
                <h3>Unificação de modelos xml</h3>
              </div>
              <div className="InfoPlusItem">
                <img src={conversao} alt="Quadrado azul" />
                <h3>Conversão de dados técnicos</h3>
              </div>
              <div className="InfoPlusItem">
                <img src={tomadeci} alt="Quadrado azul" />
                <h3>Tomada de decisão adaptiva</h3>
              </div>
              <div className="InfoPlusItem">
                <img src={validanotas} alt="Quadrado azul" />
                <h3>Validações fiscais autônomas</h3>
              </div>
              <div className="InfoPlusItem">
                <img src={validacruzadas} alt="Quadrado azul" />
                <h3>Validações cruzadas</h3>
              </div>
              <div className="InfoPlusItem">
                <img src={diversosformatos} alt="Quadrado azul" />
                <h3>Diversos formatos aceitos</h3>
              </div>
            </div>
            <div className="InfoButtom">
              <h3>
                Descubra um novo jeito de organizar e controlar notas fiscais!
              </h3>
              <button>Solicitar Demonstração</button>
            </div>
          </InfoPlus>
        </div>
      </InfoFunc>
    </div>
  );
};

export default MoreInfo;
