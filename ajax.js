$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');


        $.ajax(endpoint)
            .done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            $('#endereco').val(endereco)
            })

            .fail(function(){
                alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
            })

    
            .always(function() {
                setTimeout(function() {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 2000);
            })
    })
})

