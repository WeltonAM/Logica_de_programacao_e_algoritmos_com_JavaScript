const resp = document.querySelectorAll("h5")[1]

const contarVisitas = () => {

  let contador = 0

  if (localStorage.getItem("lojaContador")) {
    contador = Number(localStorage.getItem("lojaContador"))
  }

  contador++

  if (contador == 1) {
    resp.innerText = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site."
  } else {
    resp.innerText = `Que bom que você voltou! Esta é a sua visita de número ${contador} ao nosso site.`
  }

  localStorage.setItem("lojaContador", contador)
}

const inRadios = document.querySelectorAll("input")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"]

  let selecao
  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selecao = i
      break
    }
  }

  if (selecao <= 2) {
    dvTitulo.className = `row cores-${clubes[selecao]}`

    imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
    imClube.className = "img-fluid"
    imClube.alt = `Símbolo do ${clubes[selecao]}`
    localStorage.setItem("clube", clubes[selecao])
  } else {
    dvTitulo.className = "row"
    imClube.className = "d-none"
    imClube.alt = ""
    localStorage.removeItem("clube")
  }
}

for (const inRadio of inRadios) {
  inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube")

    if (clube == "Brasil") {
      inRadios[0].checked = true
    } else if (clube == "Pelotas") {
      inRadios[1].checked = true
    } else {
      inRadios[2].checked = true
    }
    trocarClube()
  }

  contarVisitas()

}

window.addEventListener("load", verificarClube)
