onload = function () {
  let load_list = localStorage.getItem("lista")
  let items = document.getElementById("ul_list")

  items.innerHTML = JSON.parse(load_list)
}

function criarLista() {
  let content = document.getElementById("input")
  let data = content.value;

  let ul_list = document.getElementById("ul_list")

  li = document.createElement("li")

  if (data == "") {
    alert("Você deve adicionar alguma tarefa na lista.")
  } else {
    li.innerHTML = data
    ul_list.appendChild(li)
    let array = Array.from(data)
    // imprimi um array
    console.log(array)
  }

  localStorage.setItem("lista", JSON.stringify(ul_list.innerHTML))

  content.value = ""
}

function apagarLista() {
  localStorage.clear("items")
}
