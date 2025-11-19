let i = 0;

function inserir(event){
    event.preventDefault();

    let nome = document.getElementById('nome');
    let tel = document.getElementById('telefone');
    let email = document.getElementById('email');

    let tabela = document.getElementById('tabela-dados');

    i++;

    let linha = '<tr id="linha_' + i + '">' +
        '<td id="c'+i+'1">' + nome.value + '</td>' + 
        '<td id="c'+i+'2">' + tel.value + '</td>' +   
        '<td id="c'+i+'3">' + email.value + '</td>' + 
        '<td id="c'+i+'4" class="botoes-acao">' +
            '<button type="button" class="btn-editar" onclick="editar(' + i + ')">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>' +
                '</svg>' +
            '</button>' +
            '<button type="button" class="btn-apagar" onclick="apagar(' + i + ')">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
                '</svg>' +
            '</button>' +
        '</td>' +
        '</tr>';

    tabela.innerHTML = tabela.innerHTML + linha;

    nome.value = "";
    tel.value = "";
    email.value = "";

}

function apagar(indice){

    let confirmacao = confirm("Tem certeza que deseja apagar?");
    
    if(confirmacao) {
        let apagarLinha = document.getElementById('linha_' + indice);
        apagarLinha.remove();
    } else {
        console.log("Operação cancelada");
    }
}

function editar(indice) {

    
}