import React from "react";
import bgheader from "../assets/images/Group84.png";
import logo from "../assets/images/logo-rm.svg";
import styled from "styled-components";

export const HeaderBG = styled.div`
  background-image: url(${bgheader});
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 100vh;
`;
export const LogoRM = styled.img.attrs((props) => ({
  src: props.Img || logo,
}))`
  width: 9.5rem;
`;
