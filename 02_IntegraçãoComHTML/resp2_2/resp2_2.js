const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const preco = Number(frm.inPreco.value);
    const tempo = Number(frm.inTempo.value);

    const valor = Math.ceil(tempo / 15);
    const valorTotal = (valor * preco).toFixed(2).replace('.', ',');

    resp1.innerText = `Valor a pagar R$: ${valorTotal}`;
});