function cadastrar() {
    let Sbruto = document.getElementById("bruto").value;
    if (Sbruto <= 1621) {
        let vdesconto = Sbruto * 0.75;
        let Sliquido = Sbruto - vdesconto
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("liquido").value = Sliquido.toFixed(2);
    }
}