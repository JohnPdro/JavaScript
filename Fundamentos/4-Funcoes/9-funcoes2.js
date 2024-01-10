function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2)) 
}

dobro(5)
dobro(7)
dobro()

function dizerOla(nome = "mundo"){ // Declara um valor padrão ao parametro da função para que não apareça como undefined
    alert("Olá, " + nome + "!")
}

dizerOla("João")
dizerOla()

function soma(a, b, c, d , e){
    alert("O resultado da soma é " + (a + b + c + d + e))
}

soma(7, 6, 4, 1, 9)

function criarUsuario(nome, email, senha, tipo){
    const usuario = {
        nome: nome,
        email, // mesmo que email: email
        senha,
        tipo,
    }
    console.log(usuario)
}
criarUsuario("João", "joao@gmail.com", "1234", "admin")


function novoUsuario(nome, email, senha, tipo = "admin"){ // Quando houver um parametro opcional sempro colocar no final para que não atrapalhe a ordem das informações 
    const usuario = {
        nome,
        tipo,
        email,
        senha,
    }
    console.log(usuario)
}
 
novoUsuario("João", "joao@gmail.com", "1234")



function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    //...
    
}
muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")



function objetoComoParametros(usuario){
    usuario.nome
    usuario.email
    usuario.telefone
    usuario.senha
    usuario.aniversario

    console.log(usuario)
}

const dadosDoUsuario = {
    nome: "João",
    email: "joao@gmail.com",
    telefone: "123",
    senha: "ds12",
    aniversario: "5"
}

objetoComoParametros(dadosDoUsuario)

