function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Comprador (nome, idade, cartao, senha) {
    this.cartao = cartao;
    this.senha = senha;

    Pessoa.call(this, nome, idade);
}

function Vendedor (nome, idade, id, comissao) {
    this.id = id;
    this.comissao = comissao;

    Pessoa.call(this, nome, idade);
}

const comprador1 = new Comprador('Felipe', '35', '123456', 'password');
const vendedor1 = new Vendedor('Ray Croc', '69', '666', '234.78' );
const pessoa1 = new Pessoa('João', '15');

console.log(pessoa1);
console.log(comprador1);
console.log(vendedor1);