import React from "react";
import logo from "../assets/images/logo-rm.svg";
import checkVerde from "../assets/images/icone-check-verde.svg";
import styled from "styled-components";

export const LogoRM = styled.img.attrs((props) => ({
  src: logo,
}))`
  height: 40px;
`;
export const CheckVerde = styled.img.attrs((props) => ({
  src: checkVerde,
}))`
  width: 1.4rem;
`;
export const InfoProsIconsMax = styled.img.attrs((props) => ({
  src: props.Img,
}))`
  width: 3rem;
  height: 3rem;
`;
