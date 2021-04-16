import React from "react";
import styled from "styled-components";
import { Container as strapContainer } from "react-bootstrap";
import { Navbar as strapNavbar } from "react-bootstrap";
import { Nav as strapNav } from "react-bootstrap";

export const Container = styled(strapContainer).attrs({ fluid: true })`
  padding: 4rem 0 0 0;
  width: 85%;
`;
export const Navbar = styled(strapNavbar)`
  width: 1200px;
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
`;
export const InfoProduct = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
