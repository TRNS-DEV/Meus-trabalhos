
    function calcular() {
    let compras = Number(document.getElementById("compras").value);
    let Quantidade = Number(document.getElementById("quantidade").value);

    let Nome = "";
    let Preco = 0;
    let total = 0;
    let mensagem = "";

    switch (compras) {
        case 1:
            Nome = "Hamburguer";
            Preco = 10;
            break;
        case 2:
            Nome = "Pizza";
            Preco = 5;
            break;
        case 3:
            Nome = "Coxinha";
            Preco = 4;
            break;
        default:
            mensagem = "Produto inválido!";
    }

    // ✔️ Fora do switch (IMPORTANTE)
    if (mensagem === "") {
        total = Preco * Quantidade;

        mensagem = `Produto: ${Nome} <br>
        Quantidade: ${Quantidade} <br>
        Total: R$ ${total}`;
    }

    document.getElementById("resultado").innerHTML = mensagem;
}

