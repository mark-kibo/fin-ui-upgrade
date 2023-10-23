import { AES, mode, pad } from "crypto-js";
import { enc, MD5, TripleDES, lib } from 'crypto-js';

let key = enc.Utf8.parse('Fintech');
// var iv = enc.Utf8.parse('8080808080808080');
key = MD5(key);
console.log(key)
key.words.push(key.words[0], key.words[1])

let options = {
    mode: mode.ECB,
    padding: pad.Pkc7
}


// var iv = lib.WordArray.random(128 / 8);

// // var encryptedlogin = AES.encrypt(
// //     enc.Utf8.parse(txtUserName),
// //     enc.Hex.parse(key),
// //     {
// //         iv: iv,
// //         mode: mode.ECB, // Change mode to ECB
// //         padding: pad.Pkc7,
// //     }
// // );
// const utf8 = new TextEncoder();

function encryptData(data) {
    let textWordArray = enc.Utf16LE.parse(data)
    const encrypted = TripleDES.encrypt(textWordArray, key,{
        mode: mode.ECB,
        padding: pad.Pkcs7
    })
    return encrypted
}
//     const ciphertext = AES.encrypt(enc.Utf8.parse(data), enc.Hex.parse(key), {
//         keySize: 128 / 8,
//         iv: iv,
//         mode: mode.ECB,
//         padding: pad.Pkcs7,
//       });
//     return ciphertext.toString();

//     // const passPhrase = phrase.toLowerCase();

//     // // Step 1: Hash the passPhrase using MD5
//     // const TDESKey = MD5("fintech");
//     // console.log(TDESKey)

//     // // Step 2: Convert the input string to a WordArray
//     // const DataToEncrypt = enc.Utf8.parse(data);

//     // // Step 3: Attempt to encrypt the string
//     // try {
//     //   const encrypted = AES.encrypt(DataToEncrypt, TDESKey, {
//     //     mode: AES.mode.ECB,
//     //     padding: AES.pad.Pkcs7,
//     //   });
//     //   return encrypted.toString();
//     // } catch (ex) {
//     //   return null;
//     // }
// }

// function md5ToKey(md5Hash) {
//     const key = [];
//     for (let i = 0; i < md5Hash.sigBytes; i += 4) {
//         key.push(
//             (md5Hash.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
//         );
//     }
//     return enc.Hex.parse(key);
// }

// function encryptData(data, phrase) {
//     const passPhrase = phrase.toLowerCase();
//     console.log(passPhrase)

//     // Step 1: Hash the passPhrase using MD5
//     const md5Hash = TripleDES.encrypt(enc.Utf8.parse("fintech")).ciphertext;
//     console.log(md5Hash)
//     const TDESKey = md5ToKey(md5Hash);

//     // Step 2: Set up the TripleDES algorithm
//     const TDESAlgorithm = TripleDES;
//     TDESAlgorithm.key = TDESKey;
//     TDESAlgorithm.mode = TripleDES.mode.ECB;
//     TDESAlgorithm.padding = TripleDES.pad.Pkcs7;

//     // Step 3: Convert the input string to a WordArray
//     const DataToEncrypt = enc.Utf8.parse(data);

//     // Step 4: Attempt to encrypt the string
//     try {
//         const encrypted = TripleDES.encrypt(DataToEncrypt, TDESKey, {
//             mode: TripleDES.mode.ECB,
//             padding: TripleDES.pad.Pkcs7,
//         });
//         return encrypted.toString();
//     } catch (ex) {
//         return null;
//     }
// }




export { encryptData };
