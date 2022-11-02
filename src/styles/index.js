import styled from "styled-components";
import { corBotaoPrimario, corBotaoPrimarioHover } from "./Variaveis"
import { corTextoPrimario, margimPagina, corFundo, corTextoInput } from "./Variaveis";
import { Link } from "react-router-dom";

export const Alert = styled.span`
    color: red;
    font-size: 13px;
    display: none;
    word-wrap: break-word;
`

export const BotaoPrimario = styled.button`
  border: none;
  padding: 1rem;
  background: ${corBotaoPrimario};
  
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: #FFFFFF;

  transition-duration: 300ms;  
  transition-timing-function: ease-out;

  &:hover {
      cursor: pointer;
      background: ${corBotaoPrimarioHover};
  }

  @media (max-width: 1080px) {
    font-weight: 600;
    padding: 12px 1rem;
    font-size: 14px
  }
`

export const BotaoSecundario = styled(Link)`
  padding: 1rem 70px;
 
  background: #ffffff;
  border: 1px solid #2a7ae4;
  color: #2a7ae4;
  box-sizing: border-box;
  
  text-decoration: none;
  font-size: 1rem;
  transition-duration: 300ms;  
  transition-timing-function: ease-out;
  &:hover {
      transition: opacity .5s linear;
      background: #d4e4fa;
      cursor: pointer;
  }
  @media (max-width: 480px) {
    padding: 12px 47.5px;
    font-size: 14px;
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
}
  @media (min-width: 481px) and (max-width: 1080px) {
    padding: 12px 64px;
    font-size: 14px;
}
`
/* CategoriaProdutos - Produtos Similares // Produtos(vendedor) - Home */

export const Section = styled.section`
  margin: 4rem ${margimPagina} 4rem ${margimPagina};
  background: ${corFundo};
  
  @media (max-width: 480px) {
    margin: 1rem;
  
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    margin: 2rem;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const VerTudo = styled.div`
  display: flex; 
  align-items: center;
  
  @media (min-width: 1080px) {
    &:hover {
      cursor: pointer;
      text-decoration: underline ${corBotaoPrimario};
    }
  }  
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: ${corTextoPrimario}; 

  @media (max-width: 1080px){
    font-size: 22px;
  }
`;
export const A = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${corBotaoPrimario};
  margin-right: 12px;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Categoria = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    
  & > section:nth-child(n+5){
    display: none;
  }
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    & > section:nth-child(n+5){
      display: none;
    }
  }
`;

export const Lista = styled(Categoria)`
  margin: 1rem 0 4rem 0;

@media (max-width: 1080px) {
    margin-bottom: 1rem;   

    & > section:nth-child(n+3){
       display: block;
      }
    & > section:last-child {
        margin-bottom: 2rem;
    }
}
`
export const Produto = styled.section`
  cursor: pointer;
  transition: all ease 0.5s;

  @media (min-width: 1080px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  
  & > a:first-child {
    text-decoration: none;
    color: #2a7ae4;
  }
`
export const Valor = styled.span`
  color: ${corTextoPrimario};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin: 5rem 0;
`;

export const VerProduto = styled(VerTudo)`
  margin-top: 0.5rem;
`;

export const Foto = styled.img`
  width: 100%;
  object-fit: cover;  
  height: 174px;  
`;

export const NomeProduto = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${corTextoPrimario};
  margin: 0.5rem 0;
`;

/* Input SobreEmpresa // AddProduto */

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Input = styled.input`
  font-size: 1rem;
  color: ${corTextoPrimario};
  margin: 0.5rem 0 1rem 0;
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 28px 0 8px 12px;
  width: 560px;

  border: none;
  border-bottom: 1px solid #c8c8c8;
 
  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button,
  &[type=number] { 
    -webkit-appearance: none;    
    -moz-appearance: textfield;    
  }

  &:focus {
    outline: 1px solid #c8c8c8;
  }

  &::placeholder {
    font-size: 1rem;    
  }

  @media (max-width: 480px) {
    width: 328px;
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    width: 434px;
  }
`;
export const Label = styled.label`
  position: absolute;
  margin: 0.5rem 0 0 12px;
  color: ${corTextoInput};
  font-size: 12px; 
`;

export const Mensagem = styled.textarea`
    font-size: 1rem;
    border-radius: 4px;
    resize: none;
    border: none;
    border-bottom: 1px solid #c8c8c8;
    padding: 1rem 0 0 12px;
    margin-bottom: 0.5rem;
    height: 82px;
    width: 560px;

    &:focus {
      outline: 1px solid #c8c8c8;
    }

    &::placeholder {
        font-size: 1rem;
        color: ${corTextoInput};
    }

    @media (max-width: 480px) {
      width: 328px;
    }

    @media (min-width: 481px) and (max-width: 1080px) {
      width: 434px;
    }
`