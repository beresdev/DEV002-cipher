const botonCifrar = document.getElementById("cbutton");
let input = document.getElementById("key");

let text = document.getElementById("originalText");

botonCifrar.addEventListener("click", cifrarMensaje)

function cifrarMensaje() {
    let valor = parseInt(input.value);
    let otext = text.value;
    let textInASCII = [];
    let codeText = [];

    for (let i=0; i < otext.length; i++) {
        let x = otext.charCodeAt(i);
        console.log("El ASCII de " + otext[i] + " es " + x)
        textInASCII.push(x)
    }

    console.log(textInASCII);

    for(let i = 0; i < textInASCII.length; i ++) {
        let l = ((textInASCII[i] - 65 + valor) % 26) + 65;
        codeText.push(l);
        console.log("El texto en ASCII codificado de " + textInASCII[i] + " es " + l)
    }

    console.log(codeText);
}
