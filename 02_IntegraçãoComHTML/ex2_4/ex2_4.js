const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const quilo  = frm.inQuilo.value;
    const consumo = Number(frm.inConsumo.value);

    const valor = (quilo / 1000) * consumo;

    resp1.innerText = `Valor a pagar R$: ${valor.toFixed(2).replace('.', ',')}`;
})
