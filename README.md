# ed25519-to-x25519

Convert Node.js KeyObject from Ed25519 (signing) to X25519 (DH)

## Usage

```js
import { Ed25519 } from "https://code4fukui.github.io/Ed25519/Ed25519.js";
import { convertPublicKey, convertSecretKey as convertPrivateKey } from "https://code4fukui.github.io/ed25519-to-x25519/src/ed2curve.js";

const keys = Ed25519.generateKeyPair();
console.log(convertPublicKey(keys.publicKey));
```
