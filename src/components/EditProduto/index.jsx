import React, { useEffect, useState, useRef, useContext} from "react";
import { Container, Legend, Adicionar, Procurar, InputDisable, Div, ArrastaImg, InputDois, MensagemDois, Form, InputMoney, Thumb, ChooseCateg, LabelThumb, DivOne, Voltar } from "../../styles/addEditProduto";
import { Label, Fieldset, Alert } from "../../styles";
import { currencyConfig, dropHandler, dragOverHandler, selectFile} from "../../scripts/addEditProduto";
import { uploadImg } from "../../service/api-upload";
import { EditProduto } from "../../service/api";
import { ProdutoContext } from "../../common/context/produto";
import { validaProduto } from "../../scripts/validacoes";
import { useNavigate } from "react-router-dom";

export default () => {
    const { produto } = useContext(ProdutoContext);
    const [file, setFile] = useState(false);
    const [nome, setNome] = useState(produto.nome);
    const [valor, setValor] = useState(produto.valor);
    const [descricao, setDescricao] = useState(produto.descricao);
    const [categoria, setCategoria] = useState(produto.categoria_id);
    const [altValor, setAltValor] = useState(produto.valor);
    const [img, setImg] = useState(false);
    const isInitialMount = useRef(true);
    const [runEdit, setRunEdit] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isInitialMount.current) {
            return;
        }else{
            setValor(document.querySelector(`[data-valor]`).value);
        }
    }, [altValor]);

    useEffect(() => {
        if (isInitialMount.current) {
            return;
        }else{
            navigate(`/produto/home`);
        }
    }, [isUpdate]);
    
    useEffect(() => {
        if (isInitialMount.current) {
            const thumb = document.querySelector('[data-thumb]');
            thumb.style.display = 'block';
            thumb.style.backgroundImage = `url('${produto.imagem}')`;
            isInitialMount.current = false;
        } else {
            EditProduto(produto.id, nome, valor, img, descricao, categoria, setIsUpdate); 
            // necessario useEffect para dar o set na img do upload            
        }
    }, [img, runEdit]);

    async function Submit(e) {
        e.preventDefault();
        let valorEdit = valor.replace(/\s/g, '').replace('R$', '');

        if(parseInt(valorEdit) < 1){ // verificando se o valor é maior que 1
            return;
        };

        if(file){ // verificando se alterou img do produto            
            await uploadImg(file, setImg);
        }else{
            setRunEdit(true);
        }
    }
    
    return (
    <>
        <Container>
            <Form onSubmit={Submit} method="patch">
                <Fieldset>
                    <DivOne>
                        <Legend>Editar produto</Legend>
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

                    <Label htmlFor="nomeproduto" aria-label="Digite o nome do Produto">Nome do produto</Label>
                    <InputDois data-nome="nome"
                    value={nome}                    
                    name="nomeproduto" type="text" required minLength={3} 
                    onChange={(e) => { setNome(e.target.value)}}
                    />
                    <Alert data-alert-nome>O nome deve ter o mínimo de 3 letras</Alert>

                    <Label htmlFor="valor" aria-label="Digite o valor do Produto">Preço do produto</Label>              
                    <InputMoney
                    inputmode="numeric"
                    value={altValor.replace(/\s/g, '').replace('R$', '')}
                    onChange={(e) => { setAltValor(e.target.value)}}
                    data-valor="valor" name="valor"
                     currency="BRL" config={currencyConfig} required/>
                    <Alert data-alert-valor>O valor deve ser maior que R$ 1,00</Alert>

                    <MensagemDois data-desc="descricao"
                    value={descricao}
                    placeholder="Descrição do produto" required minLength={10}
                    onChange={(e) => { setDescricao(e.target.value)}}
                    />
                    <Alert data-alert-desc>A descrição deve conter o mínimo de 10 caracteres<br></br></Alert>

                    <label>Escolha a categoria do produto: 
                        <ChooseCateg value={categoria} data-cat onChange={(e) => { setCategoria(e.target.value)}}>
                            <option value={1} >Star Wars</option>
                            <option value={2} >Consoles</option>
                            <option value={3} >Diversos</option>
                        </ChooseCateg>
                    </label>
                </Fieldset>               
                <Adicionar type="submit" onClick={() => validaProduto()} >Salvar</Adicionar>
          </Form>
        </Container>
    </>
  );
};