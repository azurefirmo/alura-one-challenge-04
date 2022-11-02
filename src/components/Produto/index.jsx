import React, { useState, useContext, useEffect } from "react";
import {  Section,  Div as DivCategoria,  H1,  Categoria,  Foto as FotoMenor,  NomeProduto,  Valor,  VerProduto,  A,  Produto,} from "../../styles";
import {  Container,  ProdutoDestaq,  Foto,  Preco,  Descricao,  Nome,  Div,} from "./styles";

import { ProdutoContext } from "../../common/context/produto";
import { getProdutosSimilares, getShowProduto } from "../../service/api";

export default () => {
  const { produto, setProduto } = useContext(ProdutoContext);
  const [similares, setSimilares] = useState('');
  const [page, setPage] = useState(true);

  const togglePage = () => {
    setPage((page) => !page)
  }
  
  window.scrollTo(0, 0);

  useEffect(() => {
    getProdutosSimilares(produto.categoria_id, setSimilares, produto.id);
  }, [produto]);
  
  return (
    <>
      {produto.nome && (
         <Container>
         <ProdutoDestaq>
           <Foto alt={`Imagem ilustrativa do produto ${produto.nome}`} 
           src={produto.imagem.replace('image/upload', 'image/upload/c_scale,w_560')}>
           </Foto>
           <Div>
             <Nome>{produto.nome}</Nome>
             <Preco>{produto.valor}</Preco>
             <Descricao>{produto.descricao}</Descricao>
           </Div>
         </ProdutoDestaq>
       </Container>
      )}

      <Section>
        <DivCategoria>
          <H1>Produtos similares</H1>
        </DivCategoria>
        <Categoria>
          {similares.length > 0 && (
            <>
              {similares.map((item) => {
                return (
                  <Produto
                    key={item.id}
                    onClick={() => {
                      getShowProduto(item.id, setProduto);
                      togglePage();
                    }}
                  >
                    <A to={`#`}> 
                      <FotoMenor alt={`Imagem ilustrativa do produto ${item.nome}`} 
                      src={item.imagem.replace('image/upload', 'image/upload/c_scale,w_300')}>
                      </FotoMenor>
                      <NomeProduto>{item.nome}</NomeProduto>
                      <Valor>{item.valor}</Valor>
                    </A>
                    <VerProduto>
                      <A to={`#`}>Ver produto</A>
                    </VerProduto>
                  </Produto>
                );
              })}
            </>
          )}
        </Categoria>
      </Section>
    </>
  );
};
