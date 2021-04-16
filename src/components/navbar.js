import React from "react";
import { LogoRM } from "../styles/images";
import { Navbar, Nav } from "../styles/grid";
import { ButtonOutline, ButtonGreen, NavLink } from "../styles/buttom";

const Navbarcomp = () => {
  return (
    <Navbar>
      <LogoRM />
      <div className="navMenu">
        <Nav>
          <NavLink>Planos</NavLink>
          <NavLink>Funcionalidades</NavLink>
          <NavLink>Dúvidas</NavLink>
          <NavLink>Contato</NavLink>
          <ButtonOutline>Login</ButtonOutline>
          <ButtonGreen>Solicitar Demonstração</ButtonGreen>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navbarcomp;
