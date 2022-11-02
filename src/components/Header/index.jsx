import React from "react";
import logo from "../../assets/images/logo.svg";
import { Container, Header, Div, Busca,  IconBusca, IconCancel, Logo, Span, ContainerBusca, BotaoSecundarioMenu } from "./styles";
import { BotaoSecundario } from "../../styles";
import search from "../../assets/images/icon-search.png";
import cancel from "../../assets/images/cancel.png";
import { showSearch, disableSearch } from "./func";
import { Link, useNavigate } from "react-router-dom";
import { getBusca } from "../../service/api";
import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { AuthContext } from '../../common/context/auth'

export default () => { 
  const { setProduto } = useContext(ProdutoContext);
  const navigate = useNavigate(); 
  const { isLogged } = useContext(AuthContext);
  const isAuth = isLogged ? 'data-menu' : 'data-login';

  return (
    <>
      <Container> 
        <Header data-header>
          <Div>
            <Link to="/">
              <Logo data-logo src={logo} alt="Logo do site Alura Geek"></Logo>
            </Link> 
            <ContainerBusca> 
              <Busca
                data-busca               
                required
                placeholder="O que deseja encontrar?"
                type="search"
                onKeyUp={(e) => {
                  const busca = document.querySelector("[data-busca]")
                  const key = e.which || e.keyCode;
                  const digitado = e.target.value;
                  
                  if (key == 13) { // codigo da tecla enter    
                    busca.blur(); // tirando o foco
                    if (digitado.length < 4) {
                      const alert = document.querySelector("[data-found]");
                      alert.style.display = 'block';

                      setTimeout(function(){
                        alert.style.display = 'none';
                      },5000);
                    } else {
                      setProduto(false);
                      getBusca(digitado, setProduto);
                      e.target.value = '';
                      navigate(`/search`);       
                    }
                  } 
                }}           
              ></Busca>
              <Span data-found>Busque com o mínimo de 3 letras</Span>
            </ContainerBusca>
          </Div>
          
          {isLogged ? 
          <BotaoSecundarioMenu to="/produto/home" data-login data-menu>Menu administrador</BotaoSecundarioMenu> :
          <BotaoSecundario to="/login" data-login>Login</BotaoSecundario>}
          
          <IconBusca
            data-iconbusca
            onClick={() => {
              showSearch(isAuth);
            }}
            src={search}
            alt="Ícone para busca no site."            
            />
          <IconCancel
            onClick={() => {
              disableSearch(isAuth);
            }}
            src={cancel}
            alt="Ícone para cancelar busca no site."           
            data-cancel
            />
        </Header>
      </Container>
    </>
  );
};
