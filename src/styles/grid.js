import React from "react";
import styled from "styled-components";
import { Container as strapContainer } from "react-bootstrap";
import { Navbar as strapNavbar } from "react-bootstrap";
import { Nav as strapNav } from "react-bootstrap";

export const ContainerHeader = styled(strapContainer).attrs({ fluid: true })`
  padding: 61px 0 0 0;
  width: 1216px;
`;
export const Container = styled(strapContainer).attrs({ fluid: true })`
  width: 1216px;
  padding: 0;
`;
export const Navbar = styled(strapNavbar)`
  width: 1216px;
  height: 45px;
  padding: 0;
  background-color: transparent;
  justify-content: space-between;
`;
export const Nav = styled(strapNav)`
  flex-wrap: wrap;
`;
export const SectionHeader = styled.section`
  width: 100%;
  margin: 97px 0 0 0;

  .InfoProduct {
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const InfoProsT = styled.section`
  display: flex;
  margin: 0 auto;
  margin: 150px 0;
  flex-direction: row;

  .InfoProsText {
    width: 50%;
  }

  .InfoProsItens {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px 60px;
  }
  .InfoProsItens .InfoProsItem {
    display: flex;
    gap: 30px;
  }
`;
export const InfoProsM = styled.section`
  display: flex;
  margin: 0 auto;
  width: 90%;
  flex-direction: row;
  gap: 200px;

  .divProsM {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px 10px;
  }

  h3 {
    font-family: "Poppins", "Sans-Serif";
    font-size: 1.25rem;
    font-weight: 500;
    color: #041c43;
    margin: 0;
  }

  img {
    width: 31px;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
  }
`;
export const InfoProsB = styled.section`
  margin: 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 800px;
    gap: 61px 0;
  }

  h3 {
    font-family: "Nunito Sans", "Sans-Serif";
    font-size: 1.5625rem;
  }
`;
export const InfoFunc = styled.section`
  padding: 0px 58px;

  .InfoFuncItens {
    border-radius: 20px;
    padding: 151px 0 0 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 125px;
  }

  .InfoFuncItens .InfoFuncTitle {
    font-family: "Poppins", "Sans-Serif";
    font-weight: 600;
    padding: 0;
    font-size: 2.1875rem;
    color: #041c43;
    text-align: center;
    margin: 0 290px;
  }

  .InfoFuncBox {
    display: flex;
    margin: 0 -56px;
  }

  .InfoFuncBox:nth-child(2n) {
    justify-content: flex-end;
  }

  .InfoFuncBox .backAzul {
    height: 410px;
    width: 555px;
    background-color: #041c43;
    border-radius: 10px;
  }

  .InfoFuncBox .InfoBoxText {
    display: flex;
    margin: auto auto;
    width: 312px;
    flex-direction: column;
    gap: 15px;
  }

  .InfoFuncBox .InfoBoxText h3 {
    font-family: "Poppins", "Sans-Serif";
    font-size: 1.5625rem;
    font-weight: 500;
    color: #041c43;
    margin: 0;
  }

  .InfoBoxIcon {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #10a372;
  }

  .InfoFuncBox .InfoBoxText p {
    font-family: "Nunito Sans", "Sans-Serif";
    font-size: 1.25rem;
    line-height: 1.9rem;
    margin: 0;
  }

  .InfoFuncItens hr {
    margin: 0;
    border-bottom: 1px solid #fcfcfc;
  }
`;
export const InfoPlus = styled.section`
  .InfoPlusTitle {
    font-family: "Poppins", "Sans-Serif";
    font-size: 1.5625rem;
    font-weight: 600;
    text-align: center;
    color: #041c43;
  }

  .InfoPlusItens {
    display: grid;
    margin: 100px 108px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 170px;
  }

  .InfoPlusItens .InfoPlusItem {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }

  .InfoPlusItens .InfoPlusItem img {
    width: 37px;
  }

  .InfoPlusItens .InfoPlusItem h3 {
    font-family: "Poppins", "Sans-Serif";
    font-size: 1.25rem;
    font-weight: 400;
    color: #041c43;
  }

  .InfoButtom {
    background-color: #041c43;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 20px 20px;
    margin: auto auto;
    padding: 107px 108px;
  }

  .InfoButtom h3 {
    font-family: "Poppins", "Sans-Serif";
    font-size: 1.875rem;
    margin: 0;
    padding: 0;
    width: 541px;
    font-weight: 600;
    color: #fff;
  }

  .InfoButtom button {
    background-color: #fff;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Poppins", "Sans-Serif";
    font-size: 0.9375rem;
    border-radius: 7px;
    color: #041c43;
    width: 252px;
    height: 60px;
  }
`;
