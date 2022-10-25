const botonCifrar = document.getElementById("cbutton");
let input = document.getElementById("key");

let text = document.getElementById("originalText");
let ctext = document.getElementById("cipherText")

botonCifrar.addEventListener("click", cifrarMensaje)

function cifrarMensaje() {

    if (input.value === ''|| input.value === 0 || input.value === NaN) {
        alert("Especifica clave de cifrado")
    } else if (text.value === '') {
        alert("Agrega texto a cifrar")
    }

    let valor = parseInt(input.value);
    let otext = text.value;
    let textInASCII = [];
    let codeTextInASCII = [];
    let codeText = []; 
    
    for (let i=0; i < otext.length; i++) {
        let x = otext.charCodeAt(i);
        textInASCII.push(x)
        if (textInASCII[i] === 32) {
            let l = 32;
            codeTextInASCII.push(l);
        } else {
            let l = ((textInASCII[i] - 65 + valor) % 26) + 65;
            codeTextInASCII.push(l);
        }
        let y = String.fromCharCode(codeTextInASCII[i]);
        codeText.push(y);
    }
    ctext.innerHTML = codeText.join('');
}
