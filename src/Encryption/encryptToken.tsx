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

// for testing

// // Example usage:
// const plaintext = 'fintos2000';
// const encrypted = encryptRijndael(plaintext);
// console.log('Encrypted:', encrypted);

// const decrypted = decryptRijndael(encrypted);
// console.log('Decrypted:', decrypted);
