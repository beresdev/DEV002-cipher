// import cipher from './cipher.js';

// console.log(cipher);

document.getElementById("encode-section").style.display = "none";
document.getElementById("decode-section").style.display = "none";



const botonCifrarI = document.getElementById("cbutton");
const botonDescifrarI = document.getElementById("dbutton");
const botonCifrarS = document.getElementById("cbuttonS");
const botonDescifrarS = document.getElementById("dbuttonS");

let inputC = document.getElementById("keyC");
let inputD = document.getElementById("keyD");

let text = document.getElementById("originalText");
let ctext = document.getElementById("cipherText");

let ctextD = document.getElementById("cipherTextD");
let dctext = document.getElementById("decipherText");


botonCifrarI.addEventListener("click", function() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("encode-section").style.display = "flex";
    document.getElementById("decode-section").style.display = "none";
})

botonCifrarS.addEventListener("click", cifrarMensaje)

function cifrarMensaje() {
    if (inputC.value === ''|| inputC.value === 0 || inputC.value === NaN) {
        alert("Especifica clave de cifrado")
    } else if (text.value === '') {
        alert("Agrega texto a cifrar")
    }

    let valor = parseInt(inputC.value);
    let otext = text.value;
    let textInASCII = [];
    let codeTextInASCII = [];
    let codeText = []; 

    if (valor % 26 === 0) {
        alert("Por seguridad ingresa un valor distinto")
    } else {
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
}

botonDescifrarI.addEventListener("click", function() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("decode-section").style.display = "flex";
    document.getElementById("encode-section").style.display = "none";
    // window.open("./decode.html")
})

botonDescifrarS.addEventListener("click", descifrarMensaje);

function descifrarMensaje() {
    if (inputD.value === ''|| inputD.value === 0 || inputD.value === NaN) {
        alert("Especifica clave de descifrado")
    } else if (ctextD.value === '') {
        alert("Agrega texto a descifrar")
    }

    let n = parseInt(inputD.value);
    let principalText = ctextD.value;
    let textInASCII = [];
    let decodeTextInASCII = [];
    let decodeText = [];

    for (let i = 0; i < principalText.length; i++) {
        let x = principalText.charCodeAt(i);
        textInASCII.push(x);

        if(textInASCII[i] === 32) {
            let l = 32;
            decodeTextInASCII.push(l);
        } else {
            let l = ((textInASCII[i] + 65 - n) % 26) + 65;
            decodeTextInASCII.push(l);
        }

        let y = String.fromCharCode(decodeTextInASCII[i]);
        decodeText.push(y);
    }
    dctext.innerHTML = decodeText.join('');
}


