import cipher from './cipher.js';

document.getElementById("encode-section").style.display = "none";
document.getElementById("decode-section").style.display = "none";

const botonCifrarI = document.getElementById("cbutton");
const botonDescifrarI = document.getElementById("dbutton");
const botonCifrarS = document.getElementById("cbuttonS");
const botonDescifrarS = document.getElementById("dbuttonS");
const botonDescifrarE = document.getElementById("dbuttonE");
const botonCifrarE = document.getElementById("cbuttonE");

let inputC = document.getElementById("keyC");
let inputD = document.getElementById("keyD");

let text = document.getElementById("originalText");
let ctext = document.getElementById("cipherText");

let ctextD = document.getElementById("cipherTextD");
let dctext = document.getElementById("decipherText");


botonCifrarI.addEventListener("click", showEncodeSection);

function showEncodeSection() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("encode-section").style.display = "flex";
    document.getElementById("decode-section").style.display = "none";
}

botonCifrarS.addEventListener("click", function(){
    if (text.value === '') {
        alert("Agrega texto a cifrar")
    } else if (inputC.value === '') {
        alert("Especifica clave de cifrado")
    }

    let valor = parseInt(inputC.value);
    let otext = text.value;

    ctext.innerHTML = cipher.encode(valor, otext);
})

botonDescifrarE.addEventListener("click", showDecodeSection)

botonDescifrarI.addEventListener("click",showDecodeSection);

function showDecodeSection() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("decode-section").style.display = "flex";
    document.getElementById("encode-section").style.display = "none";
}

botonDescifrarS.addEventListener("click", function() {
    if (ctextD.value === '') {
        alert("Agrega texto a descifrar")
    } else if (inputD.value === '') {
        alert("Especifica clave de descifrado")
    }

    let n = parseInt(inputD.value);
    let principalText = ctextD.value;

    dctext.innerHTML = cipher.decode(n,principalText);

});

botonCifrarE.addEventListener("click", showEncodeSection);




