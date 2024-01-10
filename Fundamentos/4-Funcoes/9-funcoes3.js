function calcularMedia(a , b){
    const media = (a + b) / 2
    // console.log(media) umas das formas de chamar a função, utilizando console.log dentro da função 

    return media // o return dentro da função é necessário para que possamos utilizar a função dentro de variavei, tornando possivél armazenar o resultado da função através do return
}

const resultado = calcularMedia(7 , 2)

console.log(resultado) // outra forma de chamar a função é declarando a função como variável e a chamando pelo console.log

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook intel core i3 8GB", 2500)

console.log(notebook)

function areaRetangular(base , altura){
    const area = base * altura
    return area
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5))

console.log(areaQuadrada(9))


function ola(){
    let texto = "..."
    texto = "Olá mundo"
    return texto // O return pode ser utilizado apenas uma vez em uma funcrion, como é visto os itens abixo estão inacessiveis, pois a função prossegue até o return
    console.log(texto)
}

console.log(ola())

function maioridade(idade) {
        if (idade >= 18){
            return "Maior de idade"
        }else {
            return "Menor de idade"
        }
}

console.log(maioridade(29))
console.log(maioridade(13))