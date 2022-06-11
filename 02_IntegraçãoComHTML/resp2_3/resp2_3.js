const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const valorPromo = ((preco * 2) + (preco * 0.50)).toFixed(2).replace('.', ',');
    const valorItem = (preco * 0.50).toFixed(2).replace('.', ',');

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorPromo}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${valorItem}`;
});