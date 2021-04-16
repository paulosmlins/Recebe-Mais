import React from "react";
import bgheader from "../assets/images/Group84.png";
import logo from "../assets/images/logo-rm.svg";
import checkVerde from "../assets/images/icone-check-verde.svg";
import styled from "styled-components";

export const HeaderBG = styled.div`
  background-image: url(${bgheader});
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 1440px;
  margin: 0 auto;
  height: 100vh;
`;
export const LogoRM = styled.img.attrs((props) => ({
  src: props.Img || logo,
}))`
  width: 9.5rem;
`;
export const CheckVerde = styled.img.attrs((props) => ({
  src: props.Img || checkVerde,
}))`
  width: 1.4rem;
`;
