import styled from "styled-components";
import { Produto, Foto } from "../../styles";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    display: block;
    
    & > h1:first-child{
      margin-bottom: 1rem;
    }
  }

`;

export const Imagem = styled.div`
  position: relative;
  top: 0;
  left: 0;
`
export const FotoProduto = styled(Foto)`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;  
`

export const Delet = styled.img`
  position: absolute; 
  width: 14px;
  height: 18px;
  top: 4%;
  left: 65%; 
  cursor: pointer;
  
  transition: all 0.7s ease-out;
  &:hover {
    filter: invert(70%);
  }

  @media (max-width: 480px) {
    left: 63%;
  }
`

export const Edit = styled.img`
position: absolute;
width: 18px;
height: 18px;
top: 4%;
left: 85%;
cursor: pointer;

transition: all 0.7s ease-out;
  &:hover {
    filter: invert(70%);
  }

@media (max-width: 480px) {
  left: 83%;  
}
`

export const ProdutoHome = styled(Produto)`
cursor: auto;
&:hover {
    transform: none;
  }

`