class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Aluno extends Pessoa {
    #notas = [];

    constructor(nome, idade, matricula, curso) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }

    apresentar() {
        console.log(
            `Meu nome é ${this.nome}, minha matrícula é ${this.matricula}, curso ${this.curso} e tenho ${this.idade} anos.`
        );
    }

    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.#notas.push(nota);
        } else {
            console.log("Não é possível adicionar uma nota que não esteja entre 0 e 10.");
        }
    }

    calcularMedia() {
        if (this.#notas.length === 0) return 0;
        let soma = 0;
        this.#notas.forEach(n => soma += n);
        let media = soma / this.#notas.length;
        return media;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    apresentar() {
        console.log(
            `Sou o professor ${this.nome}, leciono ${this.disciplina} e tenho ${this.idade} anos.`
        );
    }
}

class Turma {
    constructor(codigo, professor) {
        this.codigo = codigo;
        this.professor = professor;
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    listarTurma() {
        console.log(`\nTurma: ${this.codigo}`);
        console.log(`Professor: ${this.professor.nome} (${this.professor.disciplina})`);
        console.log("Alunos:");
        this.alunos.forEach(a => {
            console.log(`- ${a.nome} (${a.curso})`);
        });
    }
}

const prof1 = new Professor("Marcos", 40, "Programação");

const aluno1 = new Aluno("Vitor", 20, "A001", "ADS");
aluno1.adicionarNota(8);
aluno1.adicionarNota(9);
aluno1.adicionarNota(7);

const aluno2 = new Aluno("Julia", 21, "A002", "ADS");
aluno2.adicionarNota(10);
aluno2.adicionarNota(9);

const turma1 = new Turma("TURMA-01", prof1);
turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);

turma1.listarTurma();

console.log("\nMédias dos alunos:");
console.log(`${aluno1.nome}: ${aluno1.calcularMedia().toFixed(2)}`);
console.log(`${aluno2.nome}: ${aluno2.calcularMedia().toFixed(2)}`);

console.log("\nApresentações (polimorfismo):");
aluno1.apresentar();
prof1.apresentar();
