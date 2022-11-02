import styled from "styled-components";
import { corTextoPrimario, margimPagina } from "../../styles/Variaveis";

export const Section = styled.section`
  width: 100%;
  height: 368px;
  display: flex;
  justify-content: center;
  
  background: #eaf2fd;

  @media (max-width: 480px) {
    height: 553px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 240px;
 
  display: flex;
  justify-content: space-between;
  margin: 4rem ${margimPagina};

  @media (max-width: 480px) {
    height: 521px;
    flex-direction: column;
    margin: 1rem;
    align-items: center;

  }
  @media (min-width: 481px) and (max-width: 1080px) {
    height: 300px;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 2rem;
    
    & > :last-child {
      align-self:flex-end;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
    max-width: 176px;
    max-height: 50px;    
`
export const Item = styled.li`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 24px;
    list-style-type: none;
    
    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
`;

export const LastItem = styled(Item)`
@media (min-width: 481px) and (max-width: 1080px) {
  margin: 0;
}
`

export const Link = styled.a`
    text-decoration: none;
    color: ${corTextoPrimario};

    &:hover {
      text-decoration: underline;
    }
`