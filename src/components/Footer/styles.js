import styled from "styled-components";
import { brancoFundo } from "../../styles/Variaveis";

export const Footer = styled.footer`
display:flex;
justify-content: center;
align-items: center;
text-align: center;

font-weight: 500;
font-size: 1rem;
color: #464646;
background: ${brancoFundo};

width: 100%;
height: 102px;

& > :first-child {
    margin-left: 1rem;
}
& > :last-child {
    margin-right: 1rem;
}
`

export const Span = styled.span`
    color: red;
`

export const Link = styled.a`
    margin-left: 10px;    
`
export const Social = styled.img`
    width: 35px;
    &:hover {
        filter: invert(0.07);
    }
    
    @media (max-width: 480px) {
        width: 30px;
    }
`