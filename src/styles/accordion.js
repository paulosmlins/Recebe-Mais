import React from "react";
import styled from "styled-components";
import {
  Accordion as StrapAccordion,
  Card as StrapCard,
} from "react-bootstrap";

export const Accordion = styled(StrapAccordion)`
  padding: 120px 60px;
  margin: 150px 0;
  display: flex;
  width: 1072px;
  background-color: #f8fafd;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .AccordionTitle {
    font-family: "Poppins", "Sans-Serif";
    font-size: 2.1875rem;
    margin: 0 0 90px 0;
  }
`;
export const Card = styled(StrapCard)`
  margin: 20px 0;
  width: 864px;
  border: none;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  .card-header {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    height: 71px;
  }
  .card-body {
    background-color: #e4eaf9;
  }
`;
