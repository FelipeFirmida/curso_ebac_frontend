const a: number = 2;
const b: number = 10;

function multiply(a: number, b: number): number {
    console.log(a * b);
    return a * b;
};

const nome: string = 'Felipe';

function hello(nome: string): string {
    console.log(`Olá, ${nome}.`)
    return `Olá, ${nome}.`
};

multiply(a, b);
hello(nome);