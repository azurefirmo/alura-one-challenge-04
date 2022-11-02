
export function validaProduto() {
    const nomeAlert = document.querySelector('[data-alert-nome]');
    const valorAlert = document.querySelector('[data-alert-valor]');
    const descAlert = document.querySelector('[data-alert-desc]');

    const nome = document.querySelector('[data-nome]');
    const valor = document.querySelector('[data-valor]');
    const valorEdit = valor.value.replace(/\s/g, '').replace('R$', '');    
    const desc = document.querySelector('[data-desc]');
    
    if(!nome.validity.valid){
        const tipoDeInput = nome.dataset.nome;        
        nomeAlert.innerHTML = mostraMensagemDeErro(tipoDeInput, nome);

        nomeAlert.style.display = 'block';
        nome.style.marginBottom = '1px';
    }else{
        nomeAlert.style.display = 'none';
        nome.style.marginBottom = '1rem';
    }

    if(parseInt(valorEdit) < 1){
        valorAlert.style.display = 'block';
        valor.style.marginBottom = '1px';
    }else{
        valorAlert.style.display = 'none';
        valor.style.marginBottom = '1rem';
    }

    if(!desc.validity.valid){
        const tipoDeInput = desc.dataset.desc;        
        descAlert.innerHTML = mostraMensagemDeErro(tipoDeInput, desc);

        descAlert.style.display = 'block';
        desc.style.marginBottom = '1px';
    }else{
        descAlert.style.display = 'none';
        desc.style.marginBottom = '0.5rem';
    }
}
// pronto
export function validaContato() {
    const nomeAlert = document.querySelector('[data-alert-name]');
    const msgAlert = document.querySelector('[data-alert-msg]');

    const nome = document.querySelector('[data-name]');
    const msg = document.querySelector('[data-msg]');   
    
    if(!nome.validity.valid){
        const tipoDeInput = nome.dataset.name;        
        nomeAlert.innerHTML = mostraMensagemDeErro(tipoDeInput, nome);

        nomeAlert.style.display = 'block';
        nomeAlert.style.marginBottom = '3px';
        nome.style.marginBottom = '1px';
    }else{
        nomeAlert.style.display = 'none';
        nome.style.marginBottom = '1rem';       
    }
    
    if(!msg.validity.valid){
        const tipoDeInput = msg.dataset.msg;        
        msgAlert.innerHTML = mostraMensagemDeErro(tipoDeInput, msg);

        msgAlert.style.display = 'block';
        msgAlert.style.marginBottom = '3px';
        msg.style.marginBottom = '1px';
    }else{
        msgAlert.style.display = 'none';
        msg.style.marginBottom = '0.5rem';
    }
}
// pronto
export function validaLogin() {
    const emailAlert = document.querySelector('[data-alert-email]');
    const senhaAlert = document.querySelector('[data-alert-pass]');

    const email = document.querySelector('[data-email]');
    const senha = document.querySelector('[data-pass]');   
    
    if(!email.validity.valid){
        const tipoDeInput = email.dataset.email;        
        emailAlert.innerHTML = mostraMensagemDeErro(tipoDeInput, email);

        emailAlert.style.display = 'block';
        emailAlert.style.marginBottom = '10px';
        email.style.marginBottom = '1px';
    }else{
        emailAlert.style.display = 'none';
        email.style.marginBottom = '24.70px';
    }
    
    if(!senha.validity.valid){
        const tipoDeInput = senha.dataset.pass;        
        senhaAlert.innerHTML = mostraMensagemDeErro(tipoDeInput, senha);

        senhaAlert.style.display = 'block';
        senhaAlert.style.marginBottom = '10px';
        senha.style.marginBottom = '1px';
    }else{
        senhaAlert.style.display = 'none';
        senha.style.marginBottom = '24.70px';
    }
}


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        tooShort: 'O nome deve ter o mínimo de 3 letras'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: `A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.`
    },
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        tooShort: 'A mensagem deve conter o mínimo de 15 caracteres'
    },
    descricao: {
        valueMissing: 'O campo de descrição não pode estar vazio.',
        tooShort: 'A descrição deve conter o mínimo de 10 caracteres'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}