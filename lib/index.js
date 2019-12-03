// criação e exportação função md links

const fs = require('fs');

const mdLinks = (file) => {
    let arrayMdLinks = [];
    let object = [];
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err.message);
            } else {
            arrayMdLinks = data.match(/\[(.*)\]\((ht.*)\)/gm);
            arrayMdLinks.forEach(regexResult => {
                object.push({
                    text: `${regexResult.match(/(?<=\[).+?(?=\])/g)}`,
                    href: `${regexResult.match(/(?<=\().+?(?=\))/g)}`,
                })
                resolve(object)
            })
        }    
        });
    });

}

module.exports = mdLinks;

