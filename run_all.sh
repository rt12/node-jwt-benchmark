#!/bin/bash
set -e
source /usr/local/opt/nvm/nvm.sh

for version in 14 12 10 8;
do
    nvm use $version
    node index.js
done  
