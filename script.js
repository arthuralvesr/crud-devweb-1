let i = 0;

function gerenciarModal(acao) {
    const modal = document.getElementById('janela-modal');
    
    if (acao === 'abrir') {
        modal.classList.add('abrir');
    } else if (acao === 'fechar') {
        modal.classList.remove('abrir');
        document.getElementById('form-contato').reset(); 
    }
}

function inserir(event){
    event.preventDefault();

    let nome = document.getElementById('nome');
    let tel = document.getElementById('telefone');
    let email = document.getElementById('email');

    let tabela = document.getElementById('tabela-dados');
    const modal = document.getElementById('janela-modal');

    i++;

    let linha = '<tr>' +
        '<td id="c'+i+'1">' + nome.value + '</td>' + 
        '<td id="c'+i+'2">' + tel.value + '</td>' +   
        '<td id="c'+i+'3">' + email.value + '</td>' + 
        '<td id="c'+i+'4"><input type="button" id="bteditar" name="bteditar" value="Editar" onclick="editar(\''+nome.value+'\', '+i+')"></td>' +
        '</tr>';

    tabela.innerHTML = tabela.innerHTML + linha;

    nome.value = "";
    tel.value = "";
    email.value = "";

    gerenciarModal('fechar');
    
}