import styled from "styled-components";
import { BotaoPrimario } from "../../styles";
import { corTextoPrimario, corFundo } from "../../styles/Variaveis";

export const Container = styled.div`
    background: ${corFundo};
    display: flex;
    justify-content: center;
    padding: 91px 0;

    @media (max-width: 480px) {
        padding: 97px 0 76px 0;
    }
   
    @media (min-width: 481px) and (max-width: 1080px) {
        padding: 45px 0 61px 0;
    }
    
`

export const Form = styled.form`
  border: none;
  
  width: 423px;
  @media (max-width: 480px) {
    width: 328px;
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    width: 434px;
    
  }

  & > fieldset:first-child {
    border: none;
    display: flex;
    flex-direction: column;

    & > a:last-child{
      @media (max-width: 1080px) {
        margin: 0 auto;
      }
    }
  }
`;

export const Legenda = styled.legend`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: ${corTextoPrimario};
    margin: 0 auto;
`

export const Input = styled.input`
  font-size: 1rem;
  color: ${corTextoPrimario};
  margin: 24.70px 0;
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 17px 0 26px 12px;
  width: 100%;

  border: none;
  border-bottom: 1px solid #c8c8c8;

  &:focus {
    outline: 1px solid #c8c8c8;
  }

  &::placeholder {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
    padding: 8px 0 13px 12px;
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    margin: 1rem 0;
    padding: 8px 0 13px 12px;
  }
`;

export const Entrar = styled(BotaoPrimario)`
  padding: 20.5px 185.5px;
  align-self: center;
  width: 100%;

  & > a {
    text-decoration: none;
    color: #FFFFFF;
  }

  @media (max-width: 1080px) {
    padding: 12px 34px;    
  }
`;