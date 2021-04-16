import React from "react";
import IconLogo from "../assets/images/simbolo-rm.svg";
import IconFace from "../assets/images/icone-facebook.svg";
import IconInsta from "../assets/images/icone-instagram.svg";
import IconLinkedin from "../assets/images/icone-linkedin.svg";
import { FooterCont } from "../styles/grid";

const Footer = () => {
  return (
    <div className="footer">
      <FooterCont>
        <img src={IconLogo} />
        <h6>© RM Digital 2021. Todos os direitos reservados</h6>
        <div>
          <h6>Termos de Uso</h6>
          <h6>Política de Privacidade</h6>
        </div>
        <div>
          <img src={IconFace} />
          <img src={IconInsta} />
          <img src={IconLinkedin} />
        </div>
      </FooterCont>
    </div>
  );
};

export default Footer;
