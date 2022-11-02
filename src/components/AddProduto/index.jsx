import React, { useEffect, useState, useRef} from "react";
import { Container, Legend, Adicionar, Procurar, InputDisable, Div, DivOne, ArrastaImg, InputDois, MensagemDois, Form, InputMoney, Thumb, ChooseCateg, LabelThumb, Voltar } from "../../styles/addEditProduto";
import { Label, Fieldset, Alert } from "../../styles";
import { currencyConfig, dropHandler, dragOverHandler, selectFile, limpaForm } from "../../scripts/addEditProduto";
import { uploadImg } from "../../service/api-upload";
import { AddProduto } from "../../service/api";
import { validaProduto } from "../../scripts/validacoes";


export default () => {
    const [file, setFile] = useState(false);
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState(2);
    const [altValor, setAltValor] = useState('');
    const [img, SetImg] = useState('');
    const isInitialMount = useRef(true);

    useEffect(() => {
        setValor(document.querySelector(`[data-valor]`).value);
    }, [altValor]); // necessario para dar tempo da lib mudar o valor
    
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            AddProduto(nome, valor, img, descricao, categoria); // necessario useEffect para dar o set na img do upload
        }
    }, [img]);

    async function Submit(e) {
        e.preventDefault();        
        const alert = document.querySelector('[data-alert-img]');
        let valorEdit = valor.replace(/\s/g, '').replace('R$', '');

        if(parseInt(valorEdit) < 1){ // verificando se o valor é maior que 1
            return;
        };

        if(!file){ // verificando se tem img do produto
            alert.style.display = 'block';
            alert.previousElementSibling.style.marginBottom = '5px';            
            return;
        };

        alert.style.display = 'none';
        alert.previousElementSibling.style.marginBottom = '1rem';
        
        await uploadImg(file, SetImg);
        limpaForm();
    }
    
    return (
    <>
        <Container>
            <Form onSubmit={Submit} method="post">
                <Fieldset>
                    <DivOne>
                        <Legend>Adicionar novo produto</Legend>
                        <Voltar to='/produto/home'>Voltar</Voltar>
                    </DivOne>
                    <Div>
                        <ArrastaImg 
                        onDrop={(e) => {  dropHandler(e, setFile) }}
                        onDragOver={(e) => {  dragOverHandler(e) }}
                        >
                            <Thumb data-thumb><LabelThumb htmlFor="procurar"></LabelThumb></Thumb>
                        </ArrastaImg>
                        
                        <span>Ou</span>
                        <Procurar htmlFor="procurar"/>
                        <InputDisable                        
                        onChange={(e) => {  selectFile(e, setFile) }} 
                        data-file type="file" id="procurar" accept="image/*" 
                        />
                    </Div>
                    <Alert data-alert-img>Insira uma foto com o máximo de 200kb</Alert>                    
                    <div> 
                    <Label htmlFor="nomeproduto" aria-label="Digite o nome do Produto">Nome do produto</Label>
                    <InputDois data-nome="nome"
                    name="nomeproduto" type="text" required minLength={3} 
                    onChange={(e) => { setNome(e.target.value)}}
                    />
                    <Alert data-alert-nome>O nome deve ter o mínimo de 3 letras</Alert>
                    </div>
                    <Label htmlFor="valor" aria-label="Digite o valor do Produto">Preço do produto</Label>              
                    <InputMoney
                    onChange={(e) => { setAltValor(e.target.value)}}
                    data-valor="valor" name="valor"
                    inputmode="numeric"
                    currency="BRL" config={currencyConfig} required               
                    />
                    <Alert data-alert-valor>O valor deve ser maior que R$ 1,00</Alert>
                   
                    <MensagemDois data-desc="descricao"
                    placeholder="Descrição do produto" required minLength={10}
                    onChange={(e) => { setDescricao(e.target.value)}}
                    />
                    <Alert data-alert-desc>A descrição deve conter o mínimo de 10 caracteres<br></br></Alert>

                    <label>Escolha a categoria do produto: 
                        <ChooseCateg data-cat onChange={(e) => { setCategoria(e.target.value)}}>
                            <option value={1} >Star Wars</option>
                            <option value={2} selected>Consoles</option>
                            <option value={3} >Diversos</option>
                        </ChooseCateg>
                    </label>
                </Fieldset>               
                <Adicionar type="submit" onClick={() => validaProduto()} >Adicionar produto</Adicionar>
          </Form>
        </Container>
    </>
  );
};