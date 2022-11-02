import React from "react";
import { Footer, Link, Social } from "./styles";
import GitHub from "../../assets/images/github.svg"
import Linkedin from "../../assets/images/linkedinDark.svg"
import Email from "../../assets/images/gmailDark.svg"

export default () => {
  return (
    <>
      <Footer>
        <p>©2022 | azure_firmo</p>
        
        {"\n"}

        <Link href="https://www.linkedin.com/in/azurefirmo/" rel="author" target="_blank"><Social alt={`Imagem para o LinkedIn do desenvolvedor da página.`} src={Linkedin} /></Link>

        <Link href="https://github.com/azurefirmo" rel="author" target="_blank"><Social alt={`Imagem para o GitHub do desenvolvedor da página.`} src={GitHub} /></Link>

        <Link href="mailto:azure_firmo@protonmail.com" rel="author" target="_blank"><Social alt={`Imagem para o email do desenvolvedor da página.`} src={Email} /></Link>

      </Footer>
    </>
  );
};
