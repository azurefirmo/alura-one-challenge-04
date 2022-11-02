import { Section,  H1,  NomeProduto,  Valor,  Lista,  BotaoPrimario,} from "../../styles";
import { ProdutoHome, Imagem, Delet, Edit, FotoProduto, Div } from "./styles";
import Trash from "../../assets/images/trash.png";
import Change from "../../assets/images/edit.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { getAllProdudos, getShowProduto } from "../../service/api";
import { ProdutoContext } from "../../common/context/produto";
import { confirm } from "./func";

export default () => {
  const [allProdutos, setAllProdutos] = useState('');
  const [update, setUpdate] = useState(''); // stat para renderizar pag
  const { setProduto, produto } = useContext(ProdutoContext);
  const isInitialMount = useRef(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    getAllProdudos(setAllProdutos);
  }, [update]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
  } else {
    navigate(`/produto/edit?${produto.nome.replace(/\s/g, '+').toLowerCase()}`);
  }
  }, [produto]);
  
  return (
    <>
      <Section>
        <Div>
          <H1>Todos os produtos</H1>
          <Link to="/produto/add">
            <BotaoPrimario>Adicionar produto</BotaoPrimario>
          </Link>
        </Div>

        <Lista>
          {allProdutos.length > 0 && (
            <>
              {allProdutos.map((produto) => {
                return (
                  <ProdutoHome key={produto.id}>
                    <Imagem>
                      <FotoProduto
                        alt={`Imagem ilustrativa do produto ${produto.nome}`}
                        src={produto.imagem.replace('image/upload', 'image/upload/c_scale,w_300')}
                      />
                      <Delet
                        onClick={() => {
                          confirm(produto.id, setUpdate);
                        }}
                        alt="Ícone para deletar o produto."
                        src={Trash}
                        width='18px'
                      ></Delet>
                     
                      <Edit
                        onClick={() => {
                          getShowProduto(produto.id, setProduto);                                     
                        }}
                        alt="Ícone para editar o produto."
                        src={Change}
                        width='18px'
                      ></Edit>
                      
                    </Imagem>
                    <NomeProduto>{produto.nome}</NomeProduto>
                    <Valor>{produto.valor}</Valor>
                    <NomeProduto>{`#11111` + produto.id}</NomeProduto>
                  </ProdutoHome>
                );
              })}
            </>
          )}
        </Lista>
      </Section>
    </>
  );
};
