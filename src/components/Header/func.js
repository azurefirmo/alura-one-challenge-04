// mostrar barra de pesquisa para mobile
export function showSearch(isAuth) {
  console.log(isAuth)
  const busca = document.querySelector("[data-busca]");
  busca.style.visibility = `visible`;
  busca.style.opacity = '1';
  busca.style.width = '300px';
  busca.style.padding = '8px 16px';

  document.querySelector("[data-cancel]").style.display = `block`;
  document.querySelector("[data-iconbusca]").style.display = `none`;

  const login = document.querySelector(`[${isAuth}]`);
  login.style.visibility = `hidden`;
  login.style.opacity = '0';
  login.style.width = '0px';
  login.style.padding = '0';
  login.innerText = '';
  login.style.border = 'none';

  const logo = document.querySelector("[data-logo]");
  logo.style.visibility = `hidden`;
  logo.style.opacity = '0';
  logo.style.width = '0px';

  document.querySelector("[data-header]").style.justifyContent = `space-around`;
}

// ocultar barra de pesquisa para mobile
export function disableSearch(isAuth) {
  console.log(isAuth)
  const busca = document.querySelector("[data-busca]");
  busca.style.visibility = `hidden`;
  busca.style.opacity = '0';
  busca.style.width = '0px';
  busca.style.padding = '0';

  document.querySelector("[data-cancel]").style.display = `none`;
  document.querySelector("[data-iconbusca]").style.display = `block`;

  const login = document.querySelector(`[${isAuth}]`);
  login.style.border = '1px solid #2a7ae4';
  login.style.visibility = `visible`;
  login.style.opacity = '1';
  login.style.width = 'initial';

  if(isAuth === 'data-login'){
    login.innerText = 'Login';    
    login.style.padding = '12px 47.5px';
  }else{
    login.innerText = 'Menu administrador';      
    login.style.padding = '12px 1rem';    
  }

  const logo = document.querySelector("[data-logo]");
  logo.style.visibility = `visible`;
  logo.style.opacity = '1';
  logo.style.width = '150px';

  document.querySelector("[data-header]").style.justifyContent = `space-between`;
}
