'use strict';

const Benchmark = require('benchmark');

const encode = new Benchmark.Suite;
const decode = new Benchmark.Suite;

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const jsonwebtoken = require('jsonwebtoken');

let token = {};
let payload = {
    foo: 'bar',
    baz: 'qux',
    quux: 'corge',
    user_id: 100
};

function loadKey(filename) {
    return fs.readFileSync(path.join(__dirname, filename));
}
  
var algorithms = {
    HS256: {
        pub_key: 'my53cr3tv4r',
        priv_key: 'my53cr3tv4r'
    },
    RS256: {
        // openssl genrsa -out private.pem
        pub_key: loadKey('rsa-public.pem'),
        // openssl rsa -in rsa-private.pem -outform PEM -pubout -out rsa-public.pem
        priv_key: loadKey('rsa-private.pem')
    },
    ES256: {
        // openssl ecparam -genkey -name prime256v1 -noout -out ecdsa-private.pem
        priv_key: loadKey('ecdsa-private.pem'),
        // openssl ec -in ecdsa-private.pem -pubout -out ecdsa-public.pem
        pub_key: loadKey('ecdsa-public.pem')
    }
};

for (const [algo, keys] of Object.entries(algorithms)) {
    const enc = jsonwebtoken.sign(payload, keys.priv_key, {algorithm: algo});
    const dec = jsonwebtoken.verify(enc, keys.pub_key, { algorithm: algo });

    assert.equal(dec.user_id, payload.user_id);

    console.log(`${algo} token: ${enc}`)

    encode.add(algo, () => {
        token[algo] = jsonwebtoken.sign(payload, keys.priv_key, { algorithm: algo });
    });

    decode.add(algo, () => {
        jsonwebtoken.verify(token[algo], keys.pub_key, { algorithm: algo });
    })
}

console.log("Encoding");
encode
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log('Fastest encoder is ' + this.filter('fastest').map('name') + "\n") })
  .run({ 'async': false });

console.log("Decoding");
decode
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log('Fastest decoder is ' + this.filter('fastest').map('name') + "\n"); })
  .run({ 'async': false });
  