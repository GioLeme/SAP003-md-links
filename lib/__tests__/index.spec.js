const mdLinks = require("../index.js");

describe("mdLinks", () => {
    test("should a function", (done) => {
      expect(typeof mdLinks).toBe("function");
      done();
    });


    test("retorna", (done) => {
        mdLinks("./lib/__tests__/text.md")
        .then(result => {
            expect(result).toEqual([
                {text: "Node.js",
                href: "https://nodejs.org/pt-br/"
                },
                {text: "Chrome",
                href: "https://developers.google.com/v8/"            
                }
        ]);
        done()
    });
});

    test("erro", (done) => {
    mdLinks("./lib/__tests__/tet.md")
        .catch(err => {
        expect(err).toEqual("ENOENT: no such file or directory, open './lib/__tests__/tet.md'");
        done()
        });
    });
});

