// const cipher = {
//     offset: offset,
//     otext: [],

//     encode: function  () {
        
//         for (let i=0; i < otext.length; i++) {
//             let x = otext.charCodeAt(i);
//             textInASCII.push(x)
//             if (textInASCII[i] === 32) {
//                 let l = 32;
//                 codeTextInASCII.push(l);
//             } else {
//                 let l = ((textInASCII[i] - 65 + valor) % 26) + 65;
//                 codeTextInASCII.push(l);
//             }
//             let y = String.fromCharCode(codeTextInASCII[i]);
//             codeText.push(y);
//         }
    
//         ctext.innerHTML = codeText.join('');
//     }
// };

// export default cipher;
