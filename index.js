function jogo() {
   // 1. Pegamos o valor como TEXTO primeiro para validar
    let campoInput = document.getElementById("game");
    let valorBruto = campoInput.value;
    //2.verificação de número
    if(valorBruto===""){
       alert("Por favor, digite um número antes de começar!");
     return;
    }
    //3.ao passar pela verificação ira executar totalmente o código
     let usuario=Number(valorBruto);
     let computer=Math.floor(Math.random() * 10) + 1;
     let campo=document.getElementById("resultado");
     //4.Verificação via console.log
     console.log("Número escolhido pelo usuário: " + usuario);
     console.log("Número gerado pelo computador: " + computer);
     
     
     //5. condições para gnahar ou perder
     if (usuario === computer) {
        document.getElementById("resultado").innerHTML = "você ganhou!";
    } else {
        document.getElementById("resultado").innerHTML = " você perdeu! o computador escolheu " + computer + " tente de novo ";
    }
 document.getElementById("game").value="";
} 
