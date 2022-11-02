import styled from "styled-components";
import banner from "../../assets/images/banner.webp";
import { margimPagina } from "../../styles/Variaveis";

export const Banner = styled.section`
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url(${banner}) center;

width: 100%;
height: 352px;
display: flex;
background-size: cover;

@media (max-width: 480px) {   
  height: 230px;
}
@media (max-width: 1080px) {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url(${banner}) center;
    background-size: cover;
}
`;
export const Conteudo = styled.div`
  margin: 0 0 2rem ${margimPagina};
  color: #FFFFFF;
  align-self: flex-end; 
  word-wrap: break-word;
  
  @media (max-width: 480px) {  
    margin: 0 0 1rem 1rem;
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    margin-left: 2rem;
  }
`
export const H1 = styled.h1`
font-weight: 700;
font-size: 52px;
line-height: 61px;

@media (max-width: 480px) {
  font-size: 22px;
  line-height: 26px;
}
`;

export const H2 = styled.h2`
font-weight: 700;
font-size: 22px;
line-height: 26px;
margin: 1rem 0;

@media (max-width: 480px) {
  font-size: 1rem;
  line-height: 16px;
  font-weight: 600;  
}

`