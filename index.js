function jogo() {
    let usuario = Number(document.getElementById("game").value);
    let computer = Math.floor(Math.random() * 10) + 1;
    let campo= document.getElementById("resultado");
    if (usuario === computer) {
        document.getElementById("resultado").innerHTML = "você ganhou!";
    } else {
        document.getElementById("resultado").innerHTML = " você perdeu! o computador escolheu " + computer + " tente de novo ";
    }
} document.getElementById("game").value="";
