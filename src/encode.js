const botonCifrar = document.getElementById("cbutton");
let input = document.getElementById("key");

let text = document.getElementById("originalText");
let ctext = document.getElementById("cipherText")

botonCifrar.addEventListener("click", cifrarMensaje)

function cifrarMensaje() {
    let valor = parseInt(input.value);
    let otext = text.value;
    let textInASCII = [];
    let codeTextInASCII = [];
    let codeText = [];

    for (let i=0; i < otext.length; i++) {
        let x = otext.charCodeAt(i);
        console.log("El ASCII de " + otext[i] + " es " + x)
        textInASCII.push(x)
    }

    console.log(textInASCII);

    for(let i = 0; i < textInASCII.length; i ++) {
        if (textInASCII[i] === 32) {
            let l = 32;
            codeTextInASCII.push(l);
            console.log("El texto en ASCII codificado de " + textInASCII[i] + " es " + l)
        } else {
            let l = ((textInASCII[i] - 65 + valor) % 26) + 65;
            codeTextInASCII.push(l);
            console.log("El texto en ASCII cifrado de " + textInASCII[i] + " es " + l)
        }
    }

    console.log(codeTextInASCII);

    for(let i = 0; i < codeTextInASCII.length; i++) {
        let x = String.fromCharCode(codeTextInASCII[i]);
        console.log("El ASCII de " + codeTextInASCII[i] + " es " + x)
        codeText.push(x);
    }

    console.log(codeText);
    ctext.innerHTML = codeText.join('');

}
