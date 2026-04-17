function cadastrar() {
    let Sbruto = document.getElementById("bruto").value;
    if (Sbruto <= 1621) {
        let vdesconto = Sbruto * 0.75;
        let Sliquido = Sbruto - vdesconto
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("liquido").value = Sliquido.toFixed(2);
    }
else if(Sbruto<=2902.84){
 let vdesconto = Sbruto * 0.07;
        let Sliquido = Sbruto - vdesconto
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("liquido").value = Sliquido.toFixed(2);
}
else if(Sbruto<=4354.27){
     let vdesconto = Sbruto * 0.12;
        let Sliquido = Sbruto - vdesconto
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("liquido").value = Sliquido.toFixed(2);
}
else if(Sbruto<=8472.55) {
     let vdesconto = Sbruto * 0.14;
        let Sliquido = Sbruto - vdesconto
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("liquido").value = Sliquido.toFixed(2);
}



}
