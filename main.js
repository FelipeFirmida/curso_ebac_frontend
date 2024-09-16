document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    $.ajax({ 
        url: 'https://api.github.com/users/FelipeFirmida', 
        method: 'GET'
    })
    .done(function(data) {
        return data;
    })
    .done(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repository.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.public_repos;
        link.href = json.html_url;
    })
    .fail(function() {
        alert("Um erro inesperado ocorreu! Os dados não puderam ser carregados. :(")
    })
})