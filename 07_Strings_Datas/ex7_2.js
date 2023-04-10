const propmt = require("prompt-sync")();
console.log("Informe mensagem para ser criptografada com espaços.");

const msg = propmt("Mensagem: ").trim();

if (!msg.includes(" ")) {
    console.log("Informe valor válido");
    return;
}

let pares = '';
let impares = '';

for (let i = 0; i < msg.length; i++) {
    if (i % 2 === 0) {
        pares += msg[i];
    } else {
        impares += msg[i];
    }
}

const cripto = pares + impares;
console.log("Mensagem criptografada:");
console.log(cripto);