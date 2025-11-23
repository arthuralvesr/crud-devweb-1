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
        alert("O campo Nome deve conter mais de 2 letras.");
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
    let c1 = document.getElementById('c' + indice + '1'); 
    let c2 = document.getElementById('c' + indice + '2'); 
    let c3 = document.getElementById('c' + indice + '3'); 
    let c4 = document.getElementById('c' + indice + '4'); 
    
    let nomeAtual = c1.innerText;
    let telAtual = c2.innerText;
    let emailAtual = c3.innerText;

    c1.innerHTML = `<input type="text" id="edit_nome_${indice}" value="${nomeAtual}" class="input-edit" required>`;
    c2.innerHTML = `<input type="tel" id="edit_tel_${indice}" value="${telAtual}" class="input-edit" required>`;
    c3.innerHTML = `<input type="email" id="edit_email_${indice}" value="${emailAtual}" class="input-edit" required>`;

    IMask(document.getElementById(`edit_tel_${indice}`), maskOptions);
    // novos botoes 
    c4.innerHTML = 
    `<div class="botoes-acao">
        <button type="button" class="btn-salvar" onclick="salvar(${indice})">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
        </button>
        <button type="button" class="btn-cancelar" onclick="cancelarEdicao(${indice}, '${nomeAtual}', '${telAtual}', '${emailAtual}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>`;
}
function salvar(indice) {
    let nomeInput = document.getElementById(`edit_nome_${indice}`);
    let telInput = document.getElementById(`edit_tel_${indice}`);
    let emailInput = document.getElementById(`edit_email_${indice}`);
    
    let c1 = document.getElementById('c' + indice + '1');
    let c2 = document.getElementById('c' + indice + '2');
    let c3 = document.getElementById('c' + indice + '3');
    let c4 = document.getElementById('c' + indice + '4');

    c1.style.backgroundColor = 'transparent';
    c2.style.backgroundColor = 'transparent';
    c3.style.backgroundColor = 'transparent';

    let novoNome = nomeInput.value;
    let novoTel = telInput.value;
    let novoEmail = emailInput.value;
    
    let nomeValido = validarNome(novoNome);
    let telValido = validarTelefone(novoTel);
    let emailValido = validarEmail(novoEmail);
    
    if (!nomeValido) c1.style.backgroundColor = '#e9a1a1ff';
    if (!telValido) c2.style.backgroundColor = '#e9a1a1ff';
    if (!emailValido) c3.style.backgroundColor = '#e9a1a1ff';

    if (nomeValido && telValido && emailValido) {
        
        c1.innerHTML = novoNome;
        c2.innerHTML = novoTel;
        c3.innerHTML = novoEmail;

        c4.innerHTML = 
            '<button type="button" class="btn-editar" onclick="editar(' + indice + ')">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>' +
                '</svg>' +
            '</button>' +
            '<button type="button" class="btn-apagar" onclick="apagar(' + indice + ')">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
                '</svg>' +
            '</button>';

    } else {
        console.error("Validação falhou. Corrija os campos para salvar.");
    }
}

function cancelarEdicao(indice, nomeOriginal, telOriginal, emailOriginal) {
    let c1 = document.getElementById('c' + indice + '1');
    let c2 = document.getElementById('c' + indice + '2');
    let c3 = document.getElementById('c' + indice + '3');
    let c4 = document.getElementById('c' + indice + '4');

    c1.innerHTML = nomeOriginal;
    c2.innerHTML = telOriginal;
    c3.innerHTML = emailOriginal;

    c1.style.backgroundColor = 'transparent';
    c2.style.backgroundColor = 'transparent';
    c3.style.backgroundColor = 'transparent';

    c4.innerHTML = 
        '<button type="button" class="btn-editar" onclick="editar(' + indice + ')">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>' +
            '</svg>' +
        '</button>' +
        '<button type="button" class="btn-apagar" onclick="apagar(' + indice + ')">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
            '</svg>' +
        '</button>';
}