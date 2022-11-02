import axios from "axios";
import Swal from 'sweetalert2'

const api = axios.create({
  baseURL: 'https://api-commerce-geek.herokuapp.com'
});


// adicionando produtos novos
export const AddProduto = async (nome, valor, imagem, descricao, categoria) => {
  await api.post('/produtos', {   
    nome: `${nome}`,
    valor: `${valor}`,
    imagem: `${imagem}`,
    descricao: `${descricao}`,
    categoria_id: parseInt(categoria)
  })
  .then(function (response) {
    Swal.fire({
      icon: 'success',     
      title: 'Produto adicionado com sucesso!',      
      showConfirmButton: false,
      timer: 1500
    });
  })
  .catch(function (error) {
    console.error(error);
  });
}
 
// deletando produto
export const deleteProduto = async (id, setUpdate) => {
  await api.delete(`/produtos/${id}`)
  .then(function (response) {
    Swal.fire({
      icon: 'success',     
      title: 'Produto deletado com sucesso!',      
      showConfirmButton: false,
      timer: 1500
    });   
    setUpdate(id); // mudando stat para renderizar a pag
  })
  .catch(function (error) {
    console.error(error);
  });
}

// editando o produto
export const EditProduto = async (id, nome, valor, imagem, descricao, categoria, setIsUpdate) => {
  if(imagem){
    await api.patch(`/produtos/${id}`, {   
      nome: `${nome}`,
      valor: `${valor}`,
      imagem: `${imagem}`,
      descricao: `${descricao}`,
      categoria_id: parseInt(categoria)
    })
    .then(function (response) {
      setIsUpdate(true);
      Swal.fire({
        icon: 'success',     
        title: 'Produto salvo com sucesso!',      
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(function (error) {
      alert.error(error);
    });
  }else{
    await api.patch(`/produtos/${id}`, {   
      nome: `${nome}`,
      valor: `${valor}`,      
      descricao: `${descricao}`,
      categoria_id: parseInt(categoria)
    })
    .then(function (response) {
      setIsUpdate(true);
      Swal.fire({
        icon: 'success',     
        title: 'Produto salvo com sucesso!',      
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(function (error) {
      alert.error(error);
    });
  }
}

// verificar usuario login
export const getLogin = async(email, senha, setIsLogged) => {
  await api.get(`/users?email=${email}&senha=${senha}`)
    .then(function (response) {
      if(response.data.length > 0){
        setIsLogged(true);
      }else{
        Swal.fire({    
          icon: 'error',  
          confirmButtonColor: '#2A7AE4',
          title: 'Usuário e/ou senha incorretos!',
          text: 'Tente novamente.'
        });
      }      
    })
    .catch(function (error) {
      console.error(error);
    });
}

// funçao de busca de produtos por palavra
export const getBusca = async(digitado, setProduto) => {
  await api.get(`/produtos?q=${digitado}`)
    .then(function (response) {     
      setProduto(response.data); 
    })
    .catch(function (error) {
      console.error(error);
    });
}

// pegar produtos para exibir em produtos similares
export const getProdutosSimilares = async (categoriaID, setSimilares, idAtual) => {  
  await api.get(`/produtos/?categoria_id=${categoriaID}&id_ne=${idAtual}&_limit=6`)
    .then(function (response) {
      setSimilares(response.data);      
    })
    .catch(function (error) {
      console.error(error);
    });
}

// pegar os 6 primeiros produtos de cada categoria para exibir na home
export const getProdutosHome = async (setHomeProdutos) => {
  let newArray;
  await api.get(`/produtos/?categoria_id=1&_limit=6`)
    .then(function (response) {
      newArray = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  await api.get(`/produtos/?categoria_id=2&_limit=6`)
    .then(function (response) {
      newArray = [...newArray, ...response.data]
    })
    .catch(function (error) {
      console.error(error);
    });

  await api.get(`/produtos/?categoria_id=3&_limit=6`)
    .then(function (response) {
      newArray = [...newArray, ...response.data]
      setHomeProdutos(newArray)
    })
    .catch(function (error) {
      console.error(error);
    });
}

// pegar as 3 primeiras categorias para mostrar na home
export const getCategorias = async (setAllCategorias) => {
  await api.get(`/categorias?&_limit=3`)
    .then(function (response) {
      setAllCategorias(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// pegar todos produtos em ordem por categorias para exibir na pag do Adm
export const getAllProdudos = async (setAllProdutos) => {
  await api.get(`/produtos/?_sort=categoria_id`)
  .then(function (response) {
    setAllProdutos(response.data)
  })
  .catch(function (error) {
    console.error(error);
  });
}

// mostrar detalhes do produto ao clicar
export const getShowProduto = async (idProduto, setProduto) => {
  await api.get(`/produtos/${idProduto}`)
    .then(function (response) {
      setProduto(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// mostrar todos os produto de uma determinada categoria
export const getAllProdCateg = async (id, nome, setCategoria) => {
  await api.get(`/produtos/?categoria_id=${id}`)
    .then(function (response) {
      setCategoria([nome, response.data]);
    })
    .catch(function (error) {
      console.error(error);
    });
}