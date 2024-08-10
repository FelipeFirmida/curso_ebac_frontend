$('form').on('submit', function(e) {
    e.preventDefault();

    const tarefa = $('#tarefa').val();
    const novoItem = $('<li></li>');

    novoItem.text(tarefa);

    $(novoItem).appendTo('ol');

})

$('ol').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
})