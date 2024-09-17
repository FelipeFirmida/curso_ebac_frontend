let alunos = [
    {nome: 'Josefina', nota: 10},
    {nome: 'Cróvis', nota: 5},
    {nome: 'Creude', nota: 6},
    {nome: 'Justino', nota: 3},
    {nome: 'Tobias', nota: 8},
    {nome: 'Fólicles', nota:2}
]

const aprovados = alunos.filter(function(item) {
    return item.nota >= 6
})

console.log(aprovados)