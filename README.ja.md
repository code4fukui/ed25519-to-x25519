# ed25519-to-x25519

[
![npm version](https://img.shields.io/npm/v/@jjavery/ed25519-to-x25519.svg)
](https://www.npmjs.com/package/@jjavery/ed25519-to-x25519)
[
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
](https://opensource.org/licenses/MIT)

Node.jsの`KeyObject`インスタンスを、Ed25519（デジタル署名用）からX25519（Diffie-Hellman鍵交換用）に変換するための、依存関係のない軽量ライブラリです。

これにより、署名と鍵合意の両方を必要とするプロトコルにおいて、単一のEd25519鍵ペアを両方の目的で使用できるようになります。

## インストール

```bash
npm install @jjavery/ed25519-to-x25519
```

## 使い方

このパッケージは、Ed25519の公開鍵および秘密鍵の`KeyObject`を、対応するX25519の鍵に変換する関数を提供します。

```js
import {
  convertEd25519PrivateKeyToX25519,
  convertEd25519PublicKeyToX25519,
} from '@jjavery/ed25519-to-x25519';
import { generateKeyPairSync } from 'crypto';

// 1. 標準的なEd25519鍵ペアを生成
const { privateKey, publicKey } = generateKeyPairSync('ed25519');

console.log('元のEd25519 JWK公開鍵:', publicKey.export({ format: 'jwk' }));
// {
//   crv: 'Ed25519',
//   x: '...',
//   kty: 'OKP'
// }

// 2. Ed25519鍵をX25519に変換
const x25519PrivateKey = convertEd25519PrivateKeyToX25519(privateKey);
const x25519PublicKey = convertEd25519PublicKeyToX25519(publicKey);

console.log('変換後のX25519 JWK公開鍵:', x25519PublicKey.export({ format: 'jwk' }));
// {
//   crv: 'X25519',
//   x: '...',
//   kty: 'OKP'
// }

// 変換後の鍵はDiffie-Hellman鍵交換に使用可能
// 例: crypto.diffieHellman()との併用
```

## API

### `convertEd25519PublicKeyToX25519(publicKey: KeyObject): KeyObject`

Ed25519公開鍵をX25519公開鍵に変換します。

-   `publicKey`: Ed25519公開鍵を表すNode.jsの`KeyObject`。
-   戻り値: 対応するX25519公開鍵を表す新しい`KeyObject`。

### `convertEd25519PrivateKeyToX25519(privateKey: KeyObject): KeyObject`

Ed25519秘密鍵をX25519秘密鍵に変換します。

-   `privateKey`: Ed25519秘密鍵を表すNode.jsの`KeyObject`。
-   戻り値: 対応するX25519秘密鍵を表す新しい`KeyObject`。

## 謝辞

コアの変換ロジックは、Dmitry Chestnykh氏による[ed2curve-js](https://github.com/dchest/ed2curve-js)から採用しており、これは[TweetNaCl.js](http://tweetnacl.js.org/)のアルゴリズムに基づいています。

## ライセンス

MIT License
