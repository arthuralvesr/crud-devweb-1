let i = 0;

const maskOptions = {
    mask: [
        { mask: '(00) 0000-0000' },  // fixo
        { mask: '(00) 00000-0000' }  // celular
    ]
};
IMask(document.getElementById('telefone'), maskOptions);

function validarNome(nome) {
    const regex = /^[A-Za-z\s]+$/; 
    let campo = document.getElementById('nome');


    if (regex.test(nome) && nome.length > 2) {
 
        return true;
    } else {
        // alert("O campo Nome deve conter um nome valido com mais de 2 letras.");
        campo.style.backgroundColor = "#e9a1a1ff";
        campo.style.borderColor = "red";

        return false;
    }
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    let campo = document.getElementById('email');

    if(regex.test(email)) {
        return true;
    } else {
        alert("O campo Email deve conter um email valido.");
        campo.style.backgroundColor = "#e9a1a1ff";
        campo.style.borderColor = "red";

        return false;
    }
}

function validarTelefone(tel) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/; 
    let campo = document.getElementById('telefone');

    if(regex.test(tel)) {

        return true;
    } else {
        alert("O campo Telefone deve conter um número valido.");
        campo.style.backgroundColor = "#e9a1a1ff";
        campo.style.borderColor = "red";

        return false;
    }
}


function validarDados(nome, tel, email) {

    const nomePassou = validarNome(nome); 
    const telPassou = validarTelefone(tel);
    const emailPassou = validarEmail(email);

    if (!nomePassou || !telPassou || !emailPassou) {
        return false; 
    } 

    return true;
}

function inserir(event){
    event.preventDefault();

    let nome = document.getElementById('nome');
    let tel = document.getElementById('telefone');
    let email = document.getElementById('email');

    let tabela = document.getElementById('tabela-dados');

    if(validarDados(nome.value, tel.value, email.value)){

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

        nome.style.backgroundColor = "#f8fafc";
        nome.style.borderColor = "#9b9b9b";
        tel.style.backgroundColor = "#f8fafc"; 
        tel.style.borderColor = "#9b9b9b";
        email.style.backgroundColor = "#f8fafc";
        email.style.borderColor = "#9b9b9b";
    }


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