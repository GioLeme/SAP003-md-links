

## Índice
* [1. Prefácio](#1-prefácio)
* [2. Como instalar](#2-como-instalar)
* [3. Como utilizar](#3-como-utilizar)
* [4. Considerações Finais](#4-considerações-finais)

## 1. Prefácio
Este projeto é uma biblioteca que retorna os títulos e links que contém em arquivos markdown (em formato .md).  

As informaçes carregadas são trazidas deste modo:  
- title: Nome do link.  
- href: link encontrado.  

## 2. Como instalar  
Você pode instalar esta biblioteca usando o seguinte comando no seu terminal: 

`$ npm install GioLeme/SAP003-md-links`

## 3. Como utilizar
###
Para usar a biblioteca em um arquivo JavaScript, importe no seu arquivo da seguinte forma:

```js
const mdLinks = require(".caminho-da-pasta/lib/index.js");

mdLinks(path, option)
  .then(links => {
    console.log(links)
  })
  .catch(console.error)
  ```  
  
Para utilizar a CLI, digite este comando no seu terminal:

`$ md-links caminho/do/arquivo.md`
  
## 4. Considerações Finais  
Este projeto foi proposto pelo bootcamp da Laboratória Brasil.  
As tecnologias utilizadas foram:  
-  JavaScript  
-  Node.js  
-  Jest  

Projeto desenvolvido pela aluna Giovanna Lima.

 
