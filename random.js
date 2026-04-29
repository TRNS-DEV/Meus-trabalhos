function aleatorio(){
    let x=Number(Math.random()*100);
    document.getElementById("random").value=x.toFixed(2);
}
function calcular(){m
    let y= parseFloat(Math.sqrt(document.getElementById("numero").value));
    document.getElementById("raiz").value=y;
}
function potencia(){
    let base= Number(document.getElementById("base").value);
    let expoente= Number(document.getElementById("expoente").value);
    let result= Math.pow(base,expoente);
    document.getElementById("result").innerHTML= result;
}

 