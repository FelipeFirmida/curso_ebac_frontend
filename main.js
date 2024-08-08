let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function comparaNumeros (event) {
    event.preventDefault()
    let numA = document.getElementById('numA');
    let numB = document.getElementById('numB');
    
    if(Number(numB.value) > Number(numA.value)) {
        alert(`Formulário válido: O número B (${numB.value}) é maior do que o número A (${numA.value})`)
    }
    else {
        alert(`Formulário inválido: O número B (${numB.value}) NÃO é maior do que o número A (${numA.value})`)
    }
})