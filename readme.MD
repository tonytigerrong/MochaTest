[2020-11-01]
EXAMPLE: Mocha/Chai/Bluebrid/Sinon

using: mocha chai bluebird sinon
1. unit test run by mocha
2. unit test assertion by chai
3. promise create and test 
    with sinon stub / restore 

[2020-11-5]
EXAMPLE: Typescript in nodejs

typescript install: npm i -g typescript
generate tsconfig.json for ts compile: tsc --init
 - setup tsconfig.json for root folder(./ts/src) /dist folder(./ts/dist)/node module
install typescript dependencies: npm i -D typescript ts-node nodemon @types/node @types/express
create app.ts file in ./ts/src folder
 - create a api on 5000 port via express

【2020-11-07]
EXAMPLE: spawn / fork
./threads/child.js & parent-(fork/spawn).js
- fork: generate new v8 instance
- spawn: don't generate new v8 instance