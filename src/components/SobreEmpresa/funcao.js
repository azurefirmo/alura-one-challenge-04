import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

function _0x2ce7(){const _0x3b9a68=['1184BdrpZM','5yRHqAl','39967MAhcLw','template_i13ma3k','7iMOfjt','4365884RrJgUt','6986650nAjIIP','6811302krbtwF','12ZVz8EvcjUDAD1W9','25614VqiOpt','2xVEFxx','7821561KOKOKW','3024447HdTEpA'];_0x2ce7=function(){return _0x3b9a68;};return _0x2ce7();}const _0x5260ea=_0x21ba;(function(_0x438679,_0x4afd91){const _0x7fb0de=_0x21ba,_0x1e288e=_0x438679();while(!![]){try{const _0x9287a2=-parseInt(_0x7fb0de(0x12a))/0x1*(-parseInt(_0x7fb0de(0x132))/0x2)+parseInt(_0x7fb0de(0x127))/0x3+parseInt(_0x7fb0de(0x12d))/0x4*(parseInt(_0x7fb0de(0x129))/0x5)+parseInt(_0x7fb0de(0x12f))/0x6*(-parseInt(_0x7fb0de(0x12c))/0x7)+parseInt(_0x7fb0de(0x128))/0x8*(-parseInt(_0x7fb0de(0x131))/0x9)+-parseInt(_0x7fb0de(0x12e))/0xa+parseInt(_0x7fb0de(0x133))/0xb;if(_0x9287a2===_0x4afd91)break;else _0x1e288e['push'](_0x1e288e['shift']());}catch(_0x5e7774){_0x1e288e['push'](_0x1e288e['shift']());}}}(_0x2ce7,0x9165c));function _0x21ba(_0x4e7f6f,_0x217fa9){const _0x2ce735=_0x2ce7();return _0x21ba=function(_0x21bab0,_0x486102){_0x21bab0=_0x21bab0-0x127;let _0x47b054=_0x2ce735[_0x21bab0];return _0x47b054;},_0x21ba(_0x4e7f6f,_0x217fa9);}const userID=_0x5260ea(0x130),serviceId='service_xcvdwbs',template=_0x5260ea(0x12b);

//será executada pelo form
export const SendEmail = (remetente, mensagem) => { 

  var templateParams = {
    remetente: remetente,      
    mensagem: mensagem
  };

  emailjs.send(serviceId, template, templateParams, userID)
  .then(function(response){
    Swal.fire({
      icon: 'success',     
      title: 'Sua mensagem foi enviada com sucesso!',
      text: 'Obrigado pelo contato.',
      showConfirmButton: false,
      timer: 1500
    });
    const nome = document.querySelector('[data-name]');
    const msg = document.querySelector('[data-msg]');
    nome.value = '';
    msg.value = '';
  }, function(error){
    Swal.fire({      
      confirmButtonColor: '#2A7AE4',
      title: 'Oops, algo deu errado!',
      text: `${error}`
    });
  });
}