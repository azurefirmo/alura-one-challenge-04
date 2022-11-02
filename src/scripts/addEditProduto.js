export const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

// funcao de file do botao
export function selectFile(e, setFile){
  const file = e.target.files[0];
  const alert = document.querySelector('[data-alert-img]');

  if(fileSize(file.size)){
    alert.style.display = 'none';
    alert.previousElementSibling.style.marginBottom = '1rem';

    const objectURL = window.URL.createObjectURL(file);
    const thumb = document.querySelector('[data-thumb]');
    thumb.style.display = 'block';
    thumb.style.backgroundImage = `url('${objectURL}')`;
    
    const data = new FormData();
    data.append('file', file);
    setFile(data);
  }else{
    alert.style.display = 'block';
    alert.previousElementSibling.style.marginBottom = '5px';
    alert.textContent = 'Insira uma foto com o máximo de 1MB'
  }
}

// funçao de drop and drag
export function dropHandler(e, setFile) {
  const alert = document.querySelector('[data-alert-img]');
  
  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  e.preventDefault();
  
  // tipos de img permitidas
  const tiposImg = ['image/jpg', 'image/png', 'image/svg', 'image/jpeg', 'image/webp', 'image/bmp'];

  let file = e.dataTransfer.items[0].getAsFile(); // obj recebido

  if (e.dataTransfer.items) {
  // verificando se o arquivo é permitido    
    if(tiposImg.includes(file.type)) {
      if(fileSize(file.size)) { // verificando o tamanho do arquivo
        alert.style.display = 'none';
        alert.previousElementSibling.style.marginBottom = '1rem';

        const objectURL = window.URL.createObjectURL(file);
        const thumb = document.querySelector('[data-thumb]');
        thumb.style.display = 'block';
        thumb.style.backgroundImage = `url('${objectURL}')`;

        const data = new FormData();
        data.append('file', file);
        setFile(data);
      }else {
        alert.style.display = 'block';
        alert.previousElementSibling.style.marginBottom = '5px';
        alert.textContent = 'Insira uma foto com o máximo de 1MB'
      }
    }else {
      alert.style.display = 'block';
      alert.previousElementSibling.style.marginBottom = '5px';
      alert.textContent = 'Arquivo não permitido, selecione uma imagem'
    }
  }
}

function fileSize(size) { // verificando o tamanho do arquivo
  if(size < 1048576) { // 1 MB
    return true;
  }else{ 
    return false
  }
}

export function dragOverHandler(e) { 
  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  e.preventDefault();
}

// limpando formulario apos finalização
export function limpaForm () {
  document.querySelector('[data-thumb]').style.backgroundImage = '';
  document.querySelector('[data-nome]').value = '';
  document.querySelector('[data-valor]').value = '';
  document.querySelector('[data-desc]').value = '';
  document.querySelector('[data-cat]').value = 2;
}