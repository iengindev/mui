#!/bin/bash

cd ../packages/core

npm run build

npm pack

PACKAGE=$(pwd)/$(npm pack | tail -n 1)

cd ../../apps/playground

rm -rf node_modules/@mui

npm i $PACKAGE

npm run dev
