import React from "react";
import { Container, Form, Legenda, Input, Entrar } from "./styles";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../service/api";
import { useState, useEffect, useContext } from "react";
import { validaLogin } from "../../scripts/validacoes";
import { Alert } from "../../styles";
import { AuthContext } from '../../common/context/auth'


export default () => {
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();  
  const [firstUpdate, setFirstUpdate] = useState(true);
  const { isLogged, setIsLogged } = useContext(AuthContext);

  useEffect(() => {  // informar se o usuario e senha estao corretos e redirecionar a pag
    if(firstUpdate) {
      setFirstUpdate(false);
    } else {
      if(isLogged){
        navigate(`/produto/home`);
      }
    }
  }, [isLogged]);

  const Submit = (e) => {
    e.preventDefault();
    getLogin(email, senha, setIsLogged);
  }

  return (
    <>
      <Container>
        <Form onSubmit={Submit}>
          <fieldset>
            <Legenda>Iniciar Sessão</Legenda>
            <Input data-email="email"
             onChange={(e) => {setEmail(e.target.value);}} type="email" required placeholder="Escreva seu email">               
             </Input>
            <Alert data-alert-email >O nome deve ter o mínimo de 3 letras</Alert>

            <Input
              data-pass="senha"
              type="password"
              required
              placeholder="Escreva sua senha"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$" 
              title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos."
              onChange={(e) => {setSenha(e.target.value);}}
            ></Input>
            <Alert data-alert-pass>A senha não pode estar em branco</Alert>

          </fieldset>
           <Entrar type="submit" onClick={() => validaLogin()} >Entrar</Entrar>
        </Form>        
      </Container>        
    </>
  );
};
