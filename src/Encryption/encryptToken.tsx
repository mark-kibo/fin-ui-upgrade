// const CryptoJS = require('crypto-js');

// function encryptData(data, key) {
//   const iv = key; // You can use the same key for the IV
//   const encryptedData = CryptoJS.AES.encrypt(data, key, {
//     keySize: 128 / 8,
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   return encryptedData.toString();
// }

// function decryptData(encryptedData, key) {
//   const iv = key; // You can use the same key for the IV
//   const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
//     keySize: 128 / 8,
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   return decryptedBytes.toString(CryptoJS.enc.Utf8);
// }

// // Example usage:
// const key = CryptoJS.enc.Utf8.parse('8080808080808080');
// const plaintext = 'fintos2000';
// const encrypted = encryptData(plaintext, key);

// console.log('Encrypted:', encrypted);

// const decrypted = decryptData(encrypted, key);
// console.log('Decrypted:', decrypted);


// ----------------------------------------------------------------------------------------------------

// const CryptoJS = require('crypto-js');

// function encryptData(message, phrase) {
//   const passPhrase = phrase.toLowerCase();
//   const key = CryptoJS.MD5(passPhrase).toString();
  
//   const encrypted = CryptoJS.TripleDES.encrypt(message, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });

//   return encrypted.toString();
// }

// function decryptData(encryptedMessage, phrase) {
//   const passPhrase = phrase.toLowerCase();
//   const key = CryptoJS.MD5(passPhrase).toString();

//   const decrypted = CryptoJS.TripleDES.decrypt(encryptedMessage, key, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
//   });

//   return CryptoJS.enc.Utf8.stringify(decrypted);
// }

// // Example usage:
// const message = 'fintos2000';
// const phrase = 'Fintech'; // Replace with your key

// const encryptedMessage = encryptData(message, phrase);
// console.log('Encrypted:', encryptedMessage);

// const decryptedMessage = decryptData(encryptedMessage, phrase);
// console.log('Decrypted:', decryptedMessage);



// -----------------------------------------------------

const crypto = require('crypto');

// The key and initialization vector (IV): change them for your application
const key = Buffer.from([132, 42, 53, 124, 75, 56, 87, 38, 9, 10, 161, 132, 183, 91, 105, 16, 117, 218, 149, 230, 221, 212, 235, 64]);
const iv = Buffer.from([83, 71, 26, 58, 54, 35, 22, 11, 83, 71, 26, 58, 54, 35, 22, 11]);

export function encryptRijndael(data: string) {
  const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

export function decryptRijndael(encryptedData: any) {
  const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
  let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage:
const plaintext = 'fintos2000';
const encrypted = encryptRijndael(plaintext);
console.log('Encrypted:', encrypted);

const decrypted = decryptRijndael(encrypted);
console.log('Decrypted:', decrypted);
