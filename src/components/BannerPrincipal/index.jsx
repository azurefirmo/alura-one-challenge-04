import React from "react";
import { BotaoPrimario } from "../../styles";
import { Banner, Conteudo, H1, H2 } from "./styles";

export default () => {

  return (
    <>  
      <Banner>
        <Conteudo>
          <H1>Dezembro Promocional</H1>
          <H2>Produtos selecionados com 33% de desconto</H2>
          <a href="#Consoles"><BotaoPrimario>Ver Consoles</BotaoPrimario></a>
        </Conteudo>        
      </Banner>
    </>
  );
};
