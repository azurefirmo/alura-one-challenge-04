import { Section, Div,  H1,  Lista,  Foto,  NomeProduto,  Valor,  VerProduto,  A} from "../../styles"; 
import { Produtos } from "./styles";
import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { Link } from "react-router-dom";
import { getShowProduto } from "../../service/api";

export default () => {
  const { categoria, setProduto } = useContext(ProdutoContext);

  window.scrollTo(0, 0); 
  
  return (
    <>
       <Section>
        <Div>
          <H1>{categoria[0]}</H1>
        </Div>
        <Lista>
          {categoria.length > 0 && (
            <>
            {categoria[1].map((item) => {
              return (
                <Produtos
                  key={item.id}
                  onClick={() => {
                    getShowProduto(item.id, setProduto);
                  }}>
                  <Link to={`/produto?${item.nome.replace(/\s/g, '+').toLowerCase()}`}>
                    <Foto alt={`Imagem ilustrativa do produto ${item.nome}`} 
                    src={item.imagem.replace('image/upload', 'image/upload/c_scale,w_300')}>
                    </Foto>
                    <NomeProduto>{item.nome}</NomeProduto>
                    <Valor>{item.valor}</Valor>
                  </Link>
                    <VerProduto>
                      <A to={`#`}>Ver produto</A>
                    </VerProduto>
                </Produtos>
              );
            })}            
            </>
          )}
        </Lista>
      </Section>     
    </>
  );
};
