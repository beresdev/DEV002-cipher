// const botonDescifrar = document.getElementById("dbutton");

// let input = document.getElementById("key");

// let ctext = document.getElementById("cipherText");
// let dctext = document.getElementById("decipherText");

// botonDescifrar.addEventListener("click", descifrarMensaje);

// function descifrarMensaje() {

//     if (input.value === ''|| input.value === 0 || input.value === NaN) {
//         alert("Especifica clave de descifrado")
//     } else if (ctext.value === '') {
//         alert("Agrega texto a descifrar")
//     }

//     let n = parseInt(input.value);
//     let principalText = ctext.value;
//     let textInASCII = [];
//     let decodeTextInASCII = [];
//     let decodeText = [];

//     for (let i = 0; i < principalText.length; i++) {
//         let x = principalText.charCodeAt(i);
//         textInASCII.push(x);

//         if(textInASCII[i] === 32) {
//             let l = 32;
//             decodeTextInASCII.push(l);
//         } else {
//             let l = ((textInASCII[i] + 65 - n) % 26) + 65;
//             decodeTextInASCII.push(l);
//         }

//         let y = String.fromCharCode(decodeTextInASCII[i]);
//         decodeText.push(y);
//     }
//     dctext.innerHTML = decodeText.join('');
// }