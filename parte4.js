class Funcionario{
    constructor(nome){
        this.nome = nome;
    }
    calcularSalario(){
        console.log(`O valor do seu salário será de: `);
    }
}

class FuncionarioHorista extends Funcionario{
    constructor(nome, horaTrabalhada, valorHora){
        super(nome);
        this.horaTrabalhada = horaTrabalhada;
        this.valorHora = valorHora;
    }

    calcularSalario(){
        const salario = this.valorHora * this.horaTrabalhada;
        console.log(`O valor salário de ${this.nome} de: R$${salario.toFixed(2)}`);
    }
}

class FuncionarioAssalariado extends Funcionario{
    constructor(nome, salarioMensal){
        super(nome);
        this.salarioMensal = salarioMensal;
    }
    calcularSalario(){
        console.log(`O valor salário de ${this.nome} de: R$${this.salarioMensal.toFixed(2)}`);
    }
}
//Teste dos métodos para os funcionários
const funcionarios = [
    new FuncionarioHorista('Vitor', 40, 150),
    new FuncionarioHorista('Mateus', 60, 300),
    new FuncionarioAssalariado('Paulo', 4100)
];

//funcionarios.forEach(f => f.calcularSalario())

class Forma{
    constructor(forma){
        this.forma = forma;
    }
    calcularArea(){
        console.log("Calcula a área.");
    }
}

class Quadrado extends Forma{
    constructor(forma, lado){
        super(forma);
        this.lado = lado;
    }
    calcularArea(){
        const area = this.lado * this.lado;
        console.log(`A área do ${this.forma} é de ${area}`);
    }
}

class Retangulo extends Forma{
    constructor(forma, base, altura){
        super(forma);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        const area = this.base * this.altura;
        console.log(`A área do ${this.forma} é de ${area}`);
    }
}

class Circulo extends Forma{
    constructor(forma, raio){
        super(forma);
        this.raio = raio;
    }
    calcularArea(){
        const area = 3.14 * this.raio * this.raio;
        console.log(`A área do ${this.forma} é de ${area}`);
    }
}

//Teste das formas
const formas = [
    new Quadrado('Quadrado', 20),
    new Retangulo('Retangulo', 20, 10),
    new Circulo('Circulo', 10)
]

formas.forEach(f => f.calcularArea())
