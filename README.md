# ed25519-to-x25519

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[
![npm version](https://img.shields.io/npm/v/@jjavery/ed25519-to-x25519.svg)
](https://www.npmjs.com/package/@jjavery/ed25519-to-x25519)
[
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
](https://opensource.org/licenses/MIT)

A lightweight, zero-dependency library to convert Node.js `KeyObject` instances from Ed25519 (for digital signatures) to X25519 (for Diffie-Hellman key exchange).

This allows you to use a single Ed25519 key pair for both signing and key agreement, which is useful in protocols that require both capabilities.

## Installation

```bash
npm install @jjavery/ed25519-to-x25519
```

## Usage

This package provides functions to convert Ed25519 public and private `KeyObject`s into their X25519 equivalents.

```js
import {
  convertEd25519PrivateKeyToX25519,
  convertEd25519PublicKeyToX25519,
} from '@jjavery/ed25519-to-x25519';
import { generateKeyPairSync } from 'crypto';

// 1. Generate a standard Ed25519 key pair
const { privateKey, publicKey } = generateKeyPairSync('ed25519');

console.log('Original Ed25519 JWK Public Key:', publicKey.export({ format: 'jwk' }));
// {
//   crv: 'Ed25519',
//   x: '...',
//   kty: 'OKP'
// }

// 2. Convert the Ed25519 keys to X25519
const x25519PrivateKey = convertEd25519PrivateKeyToX25519(privateKey);
const x25519PublicKey = convertEd25519PublicKeyToX25519(publicKey);

console.log('Converted X25519 JWK Public Key:', x25519PublicKey.export({ format: 'jwk' }));
// {
//   crv: 'X25519',
//   x: '...',
//   kty: 'OKP'
// }

// The new keys can now be used for Diffie-Hellman key exchange
// e.g., with crypto.diffieHellman()
```

## API

### `convertEd25519PublicKeyToX25519(publicKey: KeyObject): KeyObject`

Converts an Ed25519 public key into an X25519 public key.

-   `publicKey`: A Node.js `KeyObject` representing the Ed25519 public key.
-   Returns: A new `KeyObject` representing the corresponding X25519 public key.

### `convertEd25519PrivateKeyToX25519(privateKey: KeyObject): KeyObject`

Converts an Ed25519 private key into an X25519 private key.

-   `privateKey`: A Node.js `KeyObject` representing the Ed25519 private key.
-   Returns: A new `KeyObject` representing the corresponding X25519 private key.

## Acknowledgements

The core conversion logic is adapted from [ed2curve-js](https://github.com/dchest/ed2curve-js) by Dmitry Chestnykh, which is based on the algorithms from [TweetNaCl.js](http://tweetnacl.js.org/).

## License

MIT License.