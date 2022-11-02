import Right from "../../assets/images/right.svg";
import {  Section,  Div,  H1,  VerTudo,  Categoria,  Foto,  NomeProduto,  Valor,  VerProduto,  A,  Produto,} from "../../styles";
import { useContext, useState, useEffect } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { Link } from "react-router-dom";
import { getCategorias, getProdutosHome, getShowProduto, getAllProdCateg } from "../../service/api";

export default () => {
  const [homeProdutos, setHomeProdutos] = useState('');
  const { setProduto, setCategoria, allCategorias, setAllCategorias } = useContext(ProdutoContext);

  useEffect(() => {
    getCategorias(setAllCategorias);
    getProdutosHome(setHomeProdutos);
  }, []);

  return (
    <>
      {allCategorias.length > 0 && (
        <>
          {allCategorias.map((categoria) => {
            return (
              <Section key={categoria.id} id={categoria.nome}>
                <Div>
                  <H1>{categoria.nome}</H1>
                  <VerTudo>
                    <A
                      onClick={() => {
                        getAllProdCateg(categoria.id, categoria.nome, setCategoria);
                      }}
                      to={`/produtos/cat?${categoria.nome.replace(/\s/g, '+').toLowerCase()}`}
                    >
                      Ver tudo
                    </A>
                    <img alt={`Ver toda a categoria de ${categoria.nome}`} src={Right}/>
                  </VerTudo>
                </Div>
                <Categoria>
                  {homeProdutos.length > 0 && (
                    <>
                      {homeProdutos
                        .slice( // slice para exibir cada um em sua respectiva categoria
                          categoria.id === 1 ? 0 : categoria.id === 2 ? 6 : 12,
                          categoria.id === 1 ? 6 : categoria.id === 2 ? 12 : 18
                        )
                        .map((produto) => {
                          return (
                            <Produto
                              key={produto.id}
                              onClick={() => {
                                getShowProduto(produto.id, setProduto);
                              }}
                            >
                              <Link to={`/produto?${produto.nome.replace(/\s/g, '+').toLowerCase()}`}>
                                <Foto alt={`Imagem ilustrativa do produto ${produto.nome}`} 
                                src={produto.imagem.replace('image/upload', 'image/upload/c_scale,w_300')}>
                                </Foto>
                                <NomeProduto>{produto.nome}</NomeProduto>
                                <Valor>{produto.valor}</Valor>
                              </Link>
                              <VerProduto>
                                <A to={`/produto?${produto.nome.replace(/\s/g, '+').toLowerCase()}`}>Ver produto</A>
                              </VerProduto>
                            </Produto>
                          );
                        })}
                    </>
                  )}
                </Categoria>
              </Section>
            );
          })}
        </>
      )}
    </>
  );
};
