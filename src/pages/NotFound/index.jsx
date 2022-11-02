import React from "react";
import { P, P2, P3, P4, P33, Div } from "./styles";
import { BotaoPrimario } from "../../styles";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>        
        <P>404</P>
        <P2>AH, NÃO!</P2>
        <P3>PÁGINA <P33>NÃO ENCONTRADA.</P33></P3>
        <P4>O endereço solicitado não existe.</P4>
        <Div> 
          <Link to={'/'}><BotaoPrimario>Voltar para Home</BotaoPrimario></Link>
        </Div>      
    </>
  );
};
