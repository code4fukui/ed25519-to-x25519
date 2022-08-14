import {
  convertPublicKey,
  convertSecretKey,
  convertKeyPair,
} from "./ed2curve.js";

const pubkey = new Uint8Array([
  193,  21,  63, 202, 158, 122, 120,
    42,  16,  47, 102, 194, 107, 207,
  135, 206,  64, 211, 154, 108, 253,
  239, 106,   5, 175,  86,  90, 159,
  142, 219, 252, 146
] );
const prikey = new Uint8Array( [
  235, 227, 185,   8, 122, 253, 243,
  159,  42, 110,  40, 196, 165, 165,
  104, 197, 196, 247, 131,  89,  26,
  215, 118,  26, 132, 169, 204,  40,
    53, 204,  45, 212
]);
console.log(convertPublicKey(pubkey));
console.log(convertSecretKey(prikey));
