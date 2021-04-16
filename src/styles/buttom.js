import React from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const ButtonOutline = styled.button`
  color: #041c43;
  padding: 0 1.5rem;
  font-family: "Nunito Sans", "Sans-Serif";
  margin: 0 1rem;
  background-color: transparent;
  border-color: #041c43;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
`;
export const ButtonGreen = styled.button`
  background-color: #17cf81;
  padding: 0rem 1.5rem;
  font-family: "Nunito Sans", "Sans-Serif";
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0.3rem 0.3rem 0.7rem #a2f6b9;
`;
export const NavLink = styled(Nav.Link)`
  margin: 0 0.7rem;
`;
