// script.js

function validar() {
    const auxAltura = document.getElementById("altura");
    const auxPeso = document.getElementById("peso");
    const auxErro = document.getElementById("erro");
    
    auxErro.textContent = ""; // Limpa erros antigos

    // --- Validação da Altura ---
    // 1. Pega o valor, limpa espaços e troca vírgula por ponto
    const valorAltura = (auxAltura.value || "").trim().replace(",",".");
    const altura = Number(valorAltura);
    
    // 2. Reescreve o valor corrigido (com PONTO) de volta no campo
    auxAltura.value = valorAltura; // <-- ESSA LINHA CORRIGE O ERRO
    
    if(!Number.isFinite(altura)) {
        auxErro.textContent = "Altura: Informe um valor válido (ex: 1,75)";
        auxAltura.focus();
        return false;
    }

    if(altura < 0.5 || altura > 2.51) {
        auxErro.textContent = "A altura deve estar entre 0,5m e 2,51m";
        auxAltura.focus();
        return false;
    }

    // --- Validação do Peso ---
    // 1. Pega o valor, limpa espaços e troca vírgula por ponto
    const valorPeso = (auxPeso.value || "").trim().replace(",",".");
    const peso = Number(valorPeso);

    // 2. Reescreve o valor corrigido (com PONTO) de volta no campo
    auxPeso.value = valorPeso; // <-- ESSA LINHA CORRIGE O ERRO
    
    if(!Number.isFinite(peso)) {
        auxErro.textContent = "Peso: Informe um valor válido (ex: 85,50)";
        auxPeso.focus();
        return false;
    }

    if(peso < 1 || peso > 500) {
        auxErro.textContent = "O peso deve ser um valor realista (entre 1kg e 500kg)";
        auxPeso.focus();
        return false;
    }

    // 3. Permite o envio do formulário (agora com os valores "1.85" e "85.5")
    return true;
}