function logar(){
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(nome == 'maa7vini' && senha == '12345'){
        alert('Sucesso')
        location.href = ('home.html');
    } else{
        alert('Nome ou Senha Invalidos');
    }
}