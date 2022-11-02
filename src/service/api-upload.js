import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1'
});

// fazendo upload de imagem do produto 
export async function uploadImg(file, setImg) {
    const _0x28501c=_0x84b9;function _0x84b9(_0x2c557d,_0x5d997d){const _0x24e0a7=_0x24e0();return _0x84b9=function(_0x84b9bb,_0x2fa301){_0x84b9bb=_0x84b9bb-0x120;let _0x43dbc7=_0x24e0a7[_0x84b9bb];return _0x43dbc7;},_0x84b9(_0x2c557d,_0x5d997d);}(function(_0xc4ecf4,_0x47bc21){const _0x1b6f45=_0x84b9,_0xe35eb5=_0xc4ecf4();while(!![]){try{const _0x3ebf1a=-parseInt(_0x1b6f45(0x12c))/0x1+parseInt(_0x1b6f45(0x125))/0x2*(parseInt(_0x1b6f45(0x127))/0x3)+-parseInt(_0x1b6f45(0x129))/0x4*(parseInt(_0x1b6f45(0x121))/0x5)+-parseInt(_0x1b6f45(0x126))/0x6*(parseInt(_0x1b6f45(0x128))/0x7)+-parseInt(_0x1b6f45(0x124))/0x8*(-parseInt(_0x1b6f45(0x123))/0x9)+-parseInt(_0x1b6f45(0x122))/0xa+parseInt(_0x1b6f45(0x12b))/0xb;if(_0x3ebf1a===_0x47bc21)break;else _0xe35eb5['push'](_0xe35eb5['shift']());}catch(_0x4181f6){_0xe35eb5['push'](_0xe35eb5['shift']());}}}(_0x24e0,0xbc992));function _0x24e0(){const _0x1ad66e=['bv9au5fg','1130830BgBmag','4877620cjymEA','1557fnYwrk','63296keESfi','966BgittS','1670652fCMcUy','2973KNOUXP','7jQBSJl','16qtykXK','dm8dootbl','10892497tyTnkE','394290zAHjmp'];_0x24e0=function(){return _0x1ad66e;};return _0x24e0();}const cloudName=_0x28501c(0x12a),presetName=_0x28501c(0x120);    
   
    file.append("upload_preset", presetName);       

    await api.post(`/${cloudName}/image/upload`, file)
        .then((response) => {              
            setImg(response.data.url);
        }
    );
};

