# Eric's Tic Tac Toe Game [![Build Status](https://travis-ci.org/ericdrosado/JS-Tic-Tac-Toe.svg?branch=master)](https://travis-ci.org/ericdrosado/JS-Tic-Tac-Toe)

[Click here](https://erics-tic-tac-toe.herokuapp.com) to play!

## To play game locally:

+ Clone this repository
+ In the root directory:
```
npm install
npm install -g beefy
npm install -g browserify
browserify src/index.js -o bundle.js
beefy --browserify bundle.js
```
+ Open `http://localhost:9966` in your browser.

## To run tests:

+ In the root directory:
```
npm install testem -g
browserify spec/test.js -o test_bundle.js
testem
```
