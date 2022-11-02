import styled from "styled-components";
import { corTextoPrimario } from "../../styles/Variaveis";

export const P = styled.p`    
    align-items: center;
    text-align: center;
    font-size: 200px;
    
    @media (min-width: 481px) and (max-width: 1080px) {
       // padding: 250px 0;
    }
`;

export const P2 = styled(P)`
    font-size: 100px;
    font-weight: 700;
    color: ${corTextoPrimario};

    @media (max-width: 480px){
        font-size: 70px;
    }
`;
export const P3 = styled(P2)`
    font-size: 40px; 
    font-weight: 400;
    margin-top: 1rem;

    @media (max-width: 480px){
        font-size: 25px;
    }
`;

export const P33 = styled.span`
    font-weight: 700;    
`

export const P4 = styled(P2)`
    font-size: 25px;   
    font-weight: 400;
    
    @media (max-width: 480px){
        font-size: 20px;
    }
`;

export const Div = styled.div`
    align-items: center;
    text-align: center;
    margin: 1rem 0 4rem 0;
`