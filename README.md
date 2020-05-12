# node-jwt-benchmark
Benchmark of Node.js JWT implementations

## Results
Running on MacBook Pro (15-inch, 2018) 2,2 GHz 6-Core Intel Core i7

### Node v14
```
Encoding
HS256 x 89,229 ops/sec ±1.50% (92 runs sampled)
RS256 x 1,011 ops/sec ±0.82% (92 runs sampled)
ES256 x 10,622 ops/sec ±1.16% (92 runs sampled)
Fastest encoder is HS256

Decoding
HS256 x 61,346 ops/sec ±1.30% (93 runs sampled)
RS256 x 16,364 ops/sec ±0.69% (96 runs sampled)
ES256 x 7,421 ops/sec ±1.09% (90 runs sampled)
Fastest decoder is HS256
```
### Node v12
```
Encoding
HS256 x 89,474 ops/sec ±1.75% (87 runs sampled)
RS256 x 1,006 ops/sec ±1.09% (94 runs sampled)
ES256 x 11,436 ops/sec ±0.88% (93 runs sampled)
Fastest encoder is HS256

Decoding
HS256 x 62,718 ops/sec ±1.09% (91 runs sampled)
RS256 x 16,366 ops/sec ±1.00% (91 runs sampled)
ES256 x 7,659 ops/sec ±1.12% (92 runs sampled)
Fastest decoder is HS256
```

### Node v8
```
Encoding
HS256 x 71,291 ops/sec ±1.89% (77 runs sampled)
RS256 x 921 ops/sec ±0.84% (92 runs sampled)
ES256 x 2,310 ops/sec ±3.01% (84 runs sampled)
Fastest encoder is HS256

Decoding
HS256 x 56,739 ops/sec ±3.61% (78 runs sampled)
RS256 x 15,638 ops/sec ±3.48% (83 runs sampled)
ES256 x 2,201 ops/sec ±1.06% (90 runs sampled)
Fastest decoder is HS256
```
