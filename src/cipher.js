const cipher = {
    offset: 0,
    text: [],

    encode () {
        let textInASCII = [];
        let codeTextInASCII = [];
        let codeText = [];

        if (this.offset % 26 === 0) {
            alert("Por seguridad ingresa un valor distinto")
        } else {
            for (let i=0; i < this.text.length; i++) {
                let x = this.text.charCodeAt(i);
                textInASCII.push(x)
                if (textInASCII[i] === 32) {
                    let l = 32;
                    codeTextInASCII.push(l);
                } else {
                    let l = ((textInASCII[i] - 65 + this.offset) % 26) + 65;
                    codeTextInASCII.push(l);
                }
                let y = String.fromCharCode(codeTextInASCII[i]);
                codeText.push(y);
            }
        }
        return codeText;
    },

    decode() {
        let textInASCII = [];
        let decodeTextInASCII = [];
        let decodeText = [];

        for (let i = 0; i < this.text.length; i++) {
            let x = this.text.charCodeAt(i);
            textInASCII.push(x);
    
            if(textInASCII[i] === 32) {
                let l = 32;
                decodeTextInASCII.push(l);
            } else {
                let l = ((textInASCII[i] + 65 - this.offset) % 26) + 65;
                decodeTextInASCII.push(l);
            }
            let y = String.fromCharCode(decodeTextInASCII[i]);
            decodeText.push(y);
        }
        return decodeText;
    }
};


export default cipher;