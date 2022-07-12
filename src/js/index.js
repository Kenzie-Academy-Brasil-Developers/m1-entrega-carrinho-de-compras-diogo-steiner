// const productsCart = [
//     {
//         id: 1,
//         name: "",
//         price: 0.00
//     }
// ]

//Capturando o body
const body = document.body

//Criando os elementos
//tag main
const tagMain = document.createElement("main")

//Produtos Descrição
const divDesc = document.createElement("div")
const spanItem = document.createElement("span")
const spanStrValor = document.createElement("span") 

//Lista de produtos
const tagUl = document.createElement("ul")

//Resumo
const sectionResumo = document.createElement("section")
const divResumo = document.createElement("div")
const spanStrTotal = document.createElement("span")
const spanStrValorTotal = document.createElement("span")
const btnFinalizar = document.createElement("button")


//Adiconando Class
tagMain.classList.add("products")
divDesc.classList.add("desc")
tagUl.classList.add("list")
sectionResumo.classList.add("resumo")
divResumo.classList.add("resumo-total")
btnFinalizar.classList.add("resumo-btn")

spanItem.innerText = "Item"
spanStrValor.innerText = "Valor"

spanStrTotal.innerText = "Total"
spanStrValorTotal.innerText = somaProdutos(productsCart)

btnFinalizar.innerText = "Finalizar Compra"


//pendurando elementos
tagMain.appendChild(divDesc)
tagMain.appendChild(tagUl)
tagMain.appendChild(sectionResumo)

divDesc.appendChild(spanItem)
divDesc.appendChild(spanStrValor)

sectionResumo.appendChild(divResumo)
divResumo.append(spanStrTotal, spanStrValorTotal)
sectionResumo.appendChild(btnFinalizar)

body.appendChild(tagMain)





function listandoProducts (arrayProducts) {
    for (let i = 0; i < arrayProducts.length; i++) {
        let produto = arrayProducts[i]
        let card = criandoCard(produto)
        tagUl.appendChild(card)
    }
}
listandoProducts(productsCart)



function criandoCard (produto) {
    const spanNome = document.createElement("span")
    const spanValor = document.createElement("span")

    spanNome.innerText = produto.name
    spanValor.innerText = `R$ ${produto.price.toFixed(2).replace(".", ",")}`

    const tagLi = document.createElement("li")
    tagLi.classList.add("card")
    tagLi.append(spanNome, spanValor)

    return tagLi
}



function somaProdutos(produtosValor) {
    let somaProdutos = 0
    for (let i = 0; i < produtosValor.length; i++) {
        somaProdutos+= produtosValor[i].price
    }

    return `R$ ${somaProdutos.toFixed(2).replace(".", ",")}`
}






const btnDark = document.querySelector(".btn-modo-dark")
const titulo = document.querySelector(".titulo")
btnDark.addEventListener("click", function() {
    const arrayCard = document.querySelectorAll(".card")

    body.classList.toggle("body-dark")  
    titulo.classList.toggle("titulo-dark")
    divDesc.classList.toggle("desc-dark")
    tagMain.classList.toggle("products-dark")
    divResumo.classList.toggle("resumo-dark")
    btnDark.classList.toggle("btn-dark")
    btnFinalizar.classList.toggle("resumo-btn-dark")


    for (let i = 0; i < arrayCard.length; i++) {
        arrayCard[i].classList.toggle("card-dark")
    }
})



