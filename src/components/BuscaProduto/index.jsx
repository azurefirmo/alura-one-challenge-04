import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { NotFound } from "./styles";
import { Foto,  VerProduto,  NomeProduto,  Valor,  Produto,  A, Lista, Section, H1} from "../../styles";
import { getShowProduto } from "../../service/api";
import { Link } from "react-router-dom";

export default () => {
 const { produto, setProduto } = useContext(ProdutoContext);
  return (
    <>
      {!produto && (
          <>
            <NotFound>Procurando produtos...</NotFound>          
          </>
      )}

      {produto.length === 0 && (
          <>
            <NotFound>Não encontramos o produto que você procura :(</NotFound>          
          </>
      )}          

      {produto.length > 0 && (
          <Section>
              <H1>Produtos encontrados</H1>
          <Lista> 
            <>
                {produto.map((produto) => {
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
          </Lista>
          </Section>
        )}
      
    </>
  );
};
