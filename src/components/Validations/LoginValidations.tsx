import { decryptRijndael } from "@/Encryption/encryptToken";

export const LoginValidations = (username: string): boolean => {
  const regex = /^[A-Za-z0-9\s]+$/;
console.log(decryptRijndael(username))
  return regex.test(decryptRijndael(username));
};
