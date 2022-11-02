const cipher = {

    encode: function (offset, text) {
        if(text === undefined || offset === undefined) {
            throw new TypeError("Escribe el texto")
        } else if (text === typeof 0 || offset === 0) {
            throw new TypeError ("Valor invalido")
        }

        let textInASCII = [];
        let codeTextInASCII = [];
        let codeText = [];

        if (offset % 26 === 0) {
            throw new TypeError("Por seguridad ingresa un numero distinto")
        } else {
            for (let i=0; i < text.length; i++) {
                let x = text.charCodeAt(i);
                textInASCII.push(x)
                if (textInASCII[i] === 32) {
                    let l = 32;
                    codeTextInASCII.push(l);
                } else {
                    let l = ((textInASCII[i] - 65 + offset) % 26) + 65;
                    codeTextInASCII.push(l);
                }
                let y = String.fromCharCode(codeTextInASCII[i]);
                codeText.push(y);
            }
        }
        console.log(codeText.join(''));
        return codeText.join('');
    },

    decode(offset, text) {

        if(text === undefined || offset === undefined) {
            throw new TypeError("Escribe un texto valido")
        } else if (text === typeof 0 || offset === 0) {
            throw new TypeError ("Ingresa un valor válido")
        }

        let textInASCII = [];
        let decodeTextInASCII = [];
        let decodeText = [];

        if (offset % 26 === 0) {
            throw new TypeError("Por seguridad ingresa un numero distinto")
        }
        for (let i = 0; i < text.length; i++) {
            let x = text.charCodeAt(i);
            textInASCII.push(x);
    
            if(textInASCII[i] === 32) {
                let l = 32;
                decodeTextInASCII.push(l);
            } else {
                let l = ((textInASCII[i] + 65 - offset) % 26) + 65;
                decodeTextInASCII.push(l);
            }
            let y = String.fromCharCode(decodeTextInASCII[i]);
            decodeText.push(y);
        }
        console.log(decodeText.join(''));
        return decodeText.join('');
        
    }
};

export default cipher;