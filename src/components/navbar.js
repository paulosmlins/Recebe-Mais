import React from "react";
import { LogoRM } from "../styles/images";
import { Navbar, Nav } from "../styles/grid";
import { ButtonOutline, ButtonGreenNav, NavLink } from "../styles/buttom";

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
          <ButtonGreenNav>Solicitar Demonstração</ButtonGreenNav>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navbarcomp;
