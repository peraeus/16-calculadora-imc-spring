function validar() {
    const auxAltura = document.getElementById("altura");
    const auxErro = document.getElementById("erro");
    auxErro.textContent = "";

    const valor = (auxAltura.value || "").trim().replace(",",".");
    const altura = Number(valor);

    if(Number.isFinite) {
        auxErro.textContent = "Informe um valor válido (ex: 1,75)";
        auxAltura.focus();
        return false;
    }

    if(altura < 0.5 || altura > 2.51) {
        auxErro.textContent = "A altura deve estar entre 0,5m e 2,51m";
        auxAltura.focus();
        return false;
    }
    return true;
}
