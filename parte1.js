class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano
    }

    descrever(){
        console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}`)
    }
}

class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    verificarEstoque(){
        console.log(`O produto ${this.nome} possue ${this.estoque} quantidades em estoque.`)
    }

    vender(qtd){
        this.estoque -= qtd;
        console.log(`O produto ${this.nome} foi vendido no valor de R$${this.preco}.`)
        console.log(`Forma vendidos ${qtd} produtos. A quantidade em estoque do produto ${this.nome} agora é de: ${this.estoque}`)
    }

    repor(qtd){
        this.estoque += qtd;
        console.log(`Foram repostos ${qtd} unidades. A quantidade em estoque do produto ${this.nome} agora é de: ${this.estoque}`)
    }
}

//Teste da classe Carro
const carro1 = new Carro('Opel', 'Vectra', 1998);
const carro2 = new Carro('Mercedes', 'C180', 1997);
carro1.descrever()
carro2.descrever()

//Teste da classe Produto
const produto1 = new Produto('SAMSUNG S10E', 850.90, 10);
produto1.verificarEstoque()
produto1.vender(5)
produto1.repor(10)

