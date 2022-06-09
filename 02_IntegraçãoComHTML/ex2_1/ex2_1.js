const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => { 
    e.preventDefault()
    const nome = frm.inName.value;
    resp.innerText = `Olá, ${nome}`
 })