# Eric's Tic Tac Toe Game [![Build Status](https://travis-ci.org/ericdrosado/JS-Tic-Tac-Toe.svg?branch=master)](https://travis-ci.org/ericdrosado/JS-Tic-Tac-Toe)

[Click here](https://erics-tic-tac-toe.herokuapp.com) to play!

## To play game locally:

+ Clone this repository
+ In the root directory:
```
npm install
npm install -g beefy
beefy --browserify bundle.js
```
+ Open `http://localhost:9966` in your browser.

## To use local API:

+ Change `"environment": "production"` to `"environment": "local"` in `package.json`
+ In the root directory, re-load the project:
```
npm install -g browserify
browserify src/index.js -o bundle.js
```
+ Restart server

## To run tests:

+ In the root directory: `testem`


# NOTES

to run the tests right now with updated js you need to run this before `testem`:
```browserify spec/test.js -o test_bundle.js```
