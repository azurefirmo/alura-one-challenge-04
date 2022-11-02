import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { BotaoPrimario, Label, Input, Fieldset, Mensagem, Alert} from "../../styles";
import { Container, Section, Logo, Item, Link, LastItem } from "./styles";
import { SendEmail } from "./funcao";
import { validaContato } from "../../scripts/validacoes";

export default () => {
  const [remetente,setRemetente] = useState('');
  const [mensagem, setMensagem] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    SendEmail(remetente, mensagem);
  }
  
  return (
    <>
      <Section>
        <Container>
          
          <Logo src={logo} alt="Logo do site Alura Geek"></Logo>
          <ul>
            <Item><Link href="#">Quem somos nós</Link></Item>
            <Item><Link href="#">Política de privacidade</Link></Item>
            <Item><Link href="#">Programa fidelidade</Link></Item>
            <Item><Link href="#">Nossas lojas</Link></Item>
            <Item><Link href="#">Quero ser franqueado</Link></Item>
            <LastItem><Link href="#">Anuncie aqui</Link></LastItem>
          </ul>

          <form onSubmit={Submit}>
            <Fieldset>
              <legend>Fale conosco</legend>

              <Label htmlFor="name" aria-label="Digite seu nome">Nome</Label>
              <Input data-name="nome"
              onChange={(e) => {setRemetente(e.target.value);}}
               id="name" type="text" required minLength={3}
               />
              <Alert data-alert-name>O nome deve ter o mínimo de 3 letras</Alert>

              <Mensagem data-msg="mensagem"
              onChange={(e) => {setMensagem(e.target.value);}} 
              placeholder="Escreva sua mensagem" required minLength={15}
              />
              <Alert data-alert-msg>A mensagem deve ter o mínimo de 15 letras</Alert>
            </Fieldset>
            <BotaoPrimario type="submit" onClick={() => validaContato()} >Enviar mensagem</BotaoPrimario>
          </form>      
        </Container>
      </Section>
    </>
  );
};
