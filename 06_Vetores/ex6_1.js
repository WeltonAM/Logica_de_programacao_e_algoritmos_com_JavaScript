const amigos = [
    { nome: "Ana", idade: 20 },
    { nome: "Bruno", idade: 17 },
    { nome: "Cátia", idade: 25 },
];

const amigosFiltered = amigos.map(aux => ({ nome: aux.nome, idade: aux.idade }));

console.log(amigosFiltered[0].nome);
console.log("----------------");
for (const amigo of amigos) {
    console.log(amigo.nome);
}
console.log("----------------");

const amigosMapped = amigosFiltered.map((amigo) => console.log(amigo.nome));