const botonDescifrar = document.getElementById("dbutton");

let input = document.getElementById("key");

let ctext = document.getElementById("cipherText");
let dctext = document.getElementById("decipherText");

botonDescifrar.addEventListener("click", descifrarMensaje);

function descifrarMensaje() {
    let n = parseInt(input.value);
    let principalText = ctext.value;
    let textInASCII = [];
    let decodeTextInASCII = [];
    let decodeText = [];


    for (let i = 0; i < principalText.length; i++) {
        let x = principalText.charCodeAt(i);
        console.log("El ASCII de " + principalText[i] + " es " + x)
        textInASCII.push(x);
    }

    console.log(textInASCII)

    for(let i =0; i < textInASCII.length; i++) {
        if(textInASCII[i] === 32) {
            let l = 32;
            decodeTextInASCII.push(l);
            console.log("El texto en ASCII codificado de " + textInASCII[i] + " es " + l)
        } else {
            let l = ((textInASCII[i] + 65 - n) % 26) + 65;
            decodeTextInASCII.push(l);
            console.log("El texto en ASCII codificado de " + textInASCII[i] + " es " + l)
        }
    }

    console.log(decodeTextInASCII);

    for(let i = 0; i < decodeTextInASCII.length; i++) {
        let x = String.fromCharCode(decodeTextInASCII[i]);
        console.log("El ASCII de " + decodeTextInASCII[i] + " es " + x)
        decodeText.push(x);
    }

    console.log(decodeTextInASCII);
    dctext.innerHTML = decodeText.join('');
}