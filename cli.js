#! /usr/bin/env node

const mdLinks = require('./lib/index.js');
const path = process.argv[2];

mdLinks(path)
    .then((result) => result.forEach((index) => console.log(index.href , index.text)) )
    .catch((error) => console.log(error))