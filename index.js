function vendas() {
    let quantidade = Number(document.getElementById("quantidade").value);
    let texto = "";
    for (let i = 1; i <= quantidade; i++) {
        texto += "venda nº" + i + "<br>";
        document.getElementById("resultado").innerHTML = texto;
    }
}
let lista = [];
function adicionar() {
    let item = document.getElementById("item").value;
    lista.push(item);
    document.getElementById("resultado2").innerHTML = lista;
}
function mostrarlista() {
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto += lista[i] + "<br>";
        document.getElementById("resultado3").innerHTML = texto;
    
    }
}
    function adicionar2() {
        let item2 = document.getElementById("item2").value;
        lista.push(item2);
        mostrarlista();
    }
    function excluir(){
        lista.pop();
        mostrarlista();
    }


